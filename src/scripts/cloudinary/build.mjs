import { writeFileSync, readFileSync, readdirSync, lstatSync } from 'fs'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
import consola from 'consola'
import {join} from "path";

dotenv.config()
const logger = consola.withScope(process.env.LOG_SCOPE)

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const publicPath = process.env.PUBLIC_PATH || 'static';
const allowedFormats = process.env?.ALLOWED_FORMATS?.split(',') || []

logger.success(
    `Watching the following formats: ${process.env.ALLOWED_FORMATS}\n,
  Cloudinary name: ${process.env.CLOUDINARY_CLOUD_NAME}\n,
  Public path: ${process.env.CLOUDINARY_CLOUD_NAME}\n
  Cloudinary folder ${process.env.CLOUDINARY_FOLDER}`,
)

let map

try {
  map = JSON.parse(readFileSync('./file-map-cloudinary.json', 'utf8'))
} catch (e) {
  map = {}
}

const normalizePath = (path) => path.replace(publicPath, '')

async function loopDir(path) {
  const files = await readdirSync(path)

  return Promise.all(
    files.map(async (file) => {
      const fullPath = `${path}/${file}`

      if (lstatSync(fullPath).isDirectory()) {
        await loopDir(fullPath)
      } else {
        return uploadFile(fullPath)
      }
    })
  )
}

async function uploadFile(fullPath) {
  const ext = fullPath.split('.').pop()

  if (allowedFormats.includes(ext)) {
    const normalizedPath = normalizePath(fullPath)

    logger.info(`started, ${fullPath}`)

      const folder = join(
          process.env.CLOUDINARY_FOLDER,
          "",
          normalizedPath
              .split("/")
              .slice(0, -1)
              .join("/")
      );

    if (folder.length) {
      await cloudinary.v2.api.create_folder(folder).catch(console.log)
    }

    const response = await cloudinary.v2.uploader
      .upload(fullPath, {
        folder,
        resource_type: 'auto',
        use_filename: true,
        invalidate: true,
        unique_filename: false,
      })
      .catch((e) => {
        console.log(fullPath, e)
      })

    if (response) {
      const { width, height } = response

      map[normalizedPath] = { width, height }

      logger.success(`Written ${normalizedPath} to map`)
    }

    return writeFileSync('./file-map-cloudinary.json', JSON.stringify(map))
  }
}

await loopDir(publicPath)
