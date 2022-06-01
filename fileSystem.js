const {writeFile, readFile, readFileSync} = require('fs')
const data = readFileSync("./text/dep/hello.in", 'utf8');
console.log(data)
writeFile('./text/dep/hello.out', "MY OTHER ST XTY",{flag:'a'}, (err) => {
    if(err) throw err;
    console.log("File written successfully");
});
const readAsync = (file, encoding) => new Promise((resolve, reject) => {
    readFile(file, encoding, (err, data) => {
        if(err) reject(err);
        resolve(data);
    });
});
const writeAsync = (file,data,options)=> new Promise((accept,reject )=> {
    writeFile(file,data,options,err=>{
        if(err)reject(err)
        accept("File written Successfully")
    })})
writeAsync('./text/dep/hello.out', "holy crap",{flag:'a'}).then(m=>console.log(m), e=>console.log(e))
readAsync('./text/dep/hello.out', "utf8").then(m=>console.log(m), e=>console.log(e))