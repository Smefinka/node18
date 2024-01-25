import { readFileSync, readdirSync, mkdirSync, existsSync, writeFile } from 'fs'
const nameCopyFolder = "files_copy";
let copyFilesObject = {}
function checkExistsFolder() {
  if (!existsSync(`./src/fs/${nameCopyFolder}`)) {
    mkdirSync(`./src/fs/${nameCopyFolder}`);
    return true;
  } else {
    throw new Error('FS operation failed')
  }
}

function copyFiles() {
  const arrayFiles = readdirSync("./src/fs/files/")
  arrayFiles.map((fileName) => {
    let fileText = readFileSync(`./src/fs/files/${fileName}`, 'utf8')
    copyFilesObject[fileName] = fileText;
  })
  return true;
}
const copy = async () => {
  // Write your code here 
  const newFolder = checkExistsFolder();
  if (newFolder) {
    const checkCopyFiles = copyFiles();
    if (checkCopyFiles) {
      for (const key in copyFilesObject) {
        writeFile(`./src/fs/${nameCopyFolder}/${key}`, copyFilesObject[key], (err) => {
          if (err) throw err
        })
      }
    }
  }

};

await copy();
