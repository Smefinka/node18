import { join } from 'path';
import { renameSync, existsSync } from 'fs';
const pathFolder = "./src/fs/files/";
const oldName = 'wrongFilename.txt';
const newName = "properFilename.md";
function checkexists(){
    let check = existsSync(`./src/fs/files/${oldName}`)
       if(!check){
        check = existsSync(`./src/fs/files/${newName}`)
        if(check || !check) throw new Error ('FS operation failed')
       }
}
const rename = async () => {
    // Write your code here 
 checkexists();
 const oldPath = join(pathFolder,oldName);
 const newPath = join(pathFolder,newName);
 renameSync(oldPath,newPath)
};

await rename();