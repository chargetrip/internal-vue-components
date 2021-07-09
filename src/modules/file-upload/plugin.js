import fileMap from "~/file-map-cloudinary.json";
export default (ctx, inject) => {
  ctx.$fileMap = fileMap;
  inject("fileMap", fileMap);
};
