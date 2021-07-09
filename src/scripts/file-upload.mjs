import fs, { readFileSync } from "fs";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
let map;

try {
  map = JSON.parse(readFileSync("./file-map-cloudinary.json", "utf8"));
} catch (e) {
  map = {};
}

const allowedFormats = ["jpg", "jpeg", "png", "mp4", "svg"];
const loopDir = async (path, createFolder = true) => {
  const files = await fs.readdirSync(path);

  return Promise.all(
    files.map(async fileName => {
      const normalizedPath = `${path}/${fileName}`;

      const folder = path.replace("static", "");

      if (fs.lstatSync(normalizedPath).isDirectory()) {
        if (createFolder) {
          await cloudinary.v2.api.create_folder(folder);
        }

        await loopDir(normalizedPath);
      } else {
        const ext = fileName.split(".")[1];

        if (allowedFormats.includes(ext)) {
          const response = await cloudinary.v2.uploader
            .upload(normalizedPath, {
              folder: createFolder ? folder : "",
              resource_type: "auto",
              use_filename: true,
              unique_filename: false
            })
            .catch(console.log);

          if (response) {
            const { width, height } = response;

            map[`${createFolder ? folder : ""}/${fileName}`] = {
              width,
              height
            };
          }
        }
      }
    })
  );
};

await loopDir("static", false);

fs.writeFileSync("file-map-cloudinary.json", JSON.stringify(map));
