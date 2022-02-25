import { exec } from "child_process";
import { resolve, join } from "path";

const requiredOptions = [];

let didStart = false;

export default async function(moduleOptions = {}) {
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: join("fileUpload", "plugin.js"),
    options: {
      CLOUDINARY_FOLDER: moduleOptions.CLOUDINARY_FOLDER
    }
  });
  return new Promise(resolve => {
    const { nuxt } = this;
    const scriptPath = join(
      __dirname,
      "..",
      "..",
      "scripts",
      "cloudinary",
      nuxt.options.dev ? "dev.mjs" : "build.mjs"
    );

    requiredOptions.forEach(option => {
      if (!moduleOptions[option]) {
        throw new Error(`${option} is required`);
      }
    });

    const start = resolve => {
      const child = exec(`node ${scriptPath}`, { env: moduleOptions });
      if (child.stdin) {
        process.stdin.pipe(child.stdin);
      }
      if (child.stdout) {
        child.stdout.pipe(process.stdout);
      }
      child.on("exit", () => resolve?.());
    };

    if (nuxt.options.dev === false) {
      if (didStart) return resolve();

      didStart = true;
      start(resolve);
      return;
    }

    nuxt.hook("ready", start);
  });
}
