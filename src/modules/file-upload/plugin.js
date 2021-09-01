import fileMap from "~/file-map-cloudinary.json";
export default (ctx, inject) => {
  ctx.$fileMap = fileMap;
  ctx.$cloudinaryFolder = "<%= options.CLOUDINARY_FOLDER %>";
  inject("fileMap", fileMap);
};
