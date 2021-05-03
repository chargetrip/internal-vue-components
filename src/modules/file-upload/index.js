import { exec } from "child_process";
import { resolve, join } from "path";

const requiredOptions = [];

export default function(moduleOptions = {}) {
  const { nuxt } = this;
  if (nuxt.options.dev === false) return;

  requiredOptions.forEach(option => {
    if (!moduleOptions[option]) {
      throw new Error(`${option} is required`);
    }
  });

  // add the debug plugin
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: join("fileUpload", "plugin.js")
  });
  const scriptPath = join(__dirname, "..", "..", "scripts", "file-upload.mjs");

  nuxt.hook("ready", () => {
    const child = exec(
      `ALLOWED_FORMATS=${moduleOptions?.allowedFormats?.join(
        ","
      )} node ${scriptPath}`
    );

    if (child.stdin) {
      process.stdin.pipe(child.stdin);
    }
    if (child.stdout) {
      child.stdout.pipe(process.stdout);
    }
  });
}
