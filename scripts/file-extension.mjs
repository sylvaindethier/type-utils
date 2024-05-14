import { readdir, stat } from "node:fs/promises";
import process from "node:process";
import console from "node:console";

const FgRed = "\x1b[31m";
const Reset = "\x1b[0m";
const RedString = `${FgRed}%s${Reset}`;

async function checkDirFilesExtensions(dir, extensions) {
  try {
    const files = await readdir(dir, { recursive: true });
    if (!Array.isArray(extensions)) {
      extensions = [extensions];
    }

    let hasIncorrectFileExtensions = false;
    for (const file of files) {
      const filePath = `${dir}/${file}`;
      if ((await stat(filePath)).isDirectory()) {
        continue;
      }
      const hasSomeExtensions = extensions.some(function (extension) {
        return file.endsWith(extension);
      });
      if (!hasSomeExtensions) {
        hasIncorrectFileExtensions = true;
        console.error(RedString, `${filePath} extension should be one of \`${extensions}\`.`);
      }
    }

    return hasIncorrectFileExtensions;
  } catch (error) {
    console.error(RedString, error);
    return true;
  }
}

const hasError =
  (await checkDirFilesExtensions("types", ".d.ts")) ||
  (await checkDirFilesExtensions("tests", [".spec-d.ts", ".test-d.ts"]));
if (hasError) {
  process.exitCode = 1;
}
