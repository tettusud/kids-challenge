const fs = require('fs');
const path = require('path');


const imagesFolder = path.join(process.cwd(),"src/assets/icons/animals/svg")
console.log(__dirname)
fs.readdirSync(imagesFolder).forEach(file => {
    const newname = file.replace(/[0-9-]/g,'');
    const oldf = path.join(imagesFolder,file);
    console.log(`"${file.replace('.svg','')}",`)
    // const f= path.join(imagesFolder,newname);
    // fs.rename(oldf,f,()=>{
    //     console.log(` done ${newname}`)
    // })
  });