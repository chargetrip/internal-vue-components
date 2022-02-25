import { writeFileSync, readFileSync } from 'fs'
import dotenv from 'dotenv'
import * as chokidar from 'chokidar'
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

const watcher = chokidar.watch(publicPath, {
  ignored: /^\./,
  persistent: true,
})

logger.success(
  'Watching the following formats',
  process.env.ALLOWED_FORMATS,
  'cloudinary',
  process.env.CLOUDINARY_CLOUD_NAME,
  'public path',
  process.env.CLOUDINARY_PUBLIC_PATH,
  'folder',
  process.env.CLOUDINARY_CLOUD_NAME,
)

let map

try {
  map = JSON.parse(readFileSync('./file-map-cloudinary.json', 'utf8'))
} catch (e) {
  map = {}
}

const normalizePath = (path) => path.replace(publicPath, '')
const onChange = async (fullPath, action) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  const [_, ext] = fullPath.split('.')

  if (allowedFormats.includes(ext) && !fullPath.includes('/compressed/')) {
    const normalizedPath = normalizePath(fullPath)

    if (action === 'CREATE' && map[normalizedPath]) {
      return
    }

    logger.info(`started action ${action}, ${normalizedPath}`)

    const folder = join(
        process.env.CLOUDINARY_FOLDER,
        "",
        normalizedPath
            .split("/")
            .slice(0, -1)
            .join("/")
    );

    if (folder.length) {
      await cloudinary.v2.api.create_folder(folder).catch(console.log);
    }

    const response = await cloudinary.v2.uploader
      .upload(fullPath, {
        folder,
        resource_type: 'auto',
        use_filename: true,
        invalidate: true,
        unique_filename: false,
      })
      .catch(console.log)

    if (response) {
      const { width, height } = response

      map[normalizedPath] = { width, height }

      logger.success(`Written ${normalizedPath} to map`)
    }

    return writeFileSync('./file-map-cloudinary.json', JSON.stringify(map))
  }
}

watcher
  .on('add', (path) => onChange(path, 'CREATE'))
  .on('change', (path) => onChange(path, 'CHANGE'))
