const fs =require("fs");

// function crFile(){

//     fs.writeFileSync("myfile.txt","This is my first file");
// }

createfile=(()=>{
    fs.writeFileSync("myfile.txt","This is my first file");

})

readFile=(()=>{
    const data= fs.readFileSync("myfile.txt","utf-8");
    console.log(data);

})
appendFile=(()=>{

    fs.appendFileSync("myfile.txt"," append data");
    const data= fs.readFileSync("myfile.txt","utf-8");
    console.log(data);

})



module.exports={createfile,readFile,appendFile};