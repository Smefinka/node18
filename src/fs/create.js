import { writeFile,existsSync, readdir } from 'fs';
const text = 'I am fresh and young';
const fileName = 'fresh'
function checkexists(){
const data = existsSync(`./src/fs/files/${fileName}.txt`)
return data;
}
const create = async () => {
   const data = checkexists();
  if(data){
throw new Error ('FS operation failed')
  }else{
    writeFile(`./src/fs/files/${fileName}.txt`, text, (err) => {
      if(err) throw new Error ('FS failed with write file')
      console.log('done')
          })
  }
};

await create();