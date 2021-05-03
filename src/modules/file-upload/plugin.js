import fileMap from "~/file-map.json";
export default (ctx, inject) => {
  ctx.$fileMap = fileMap;
  inject("fileMap", fileMap);
};
