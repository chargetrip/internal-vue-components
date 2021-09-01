import fileMap from "~/file-map-cloudinary.json";
export default (ctx, inject) => {
  ctx.$fileMap = fileMap;
  // eslint-disable-next-line no-undef
  ctx.$cloudinaryFolder = options.CLOUDINARY_FOLDER;
  inject("fileMap", fileMap);
};
