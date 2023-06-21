
const {add,sub}=require("./utils")
const {createfile,readFile,appendFile}=require("./filemanage");
const  path=require("path");
console.log(5+4);

function myfun(){
//    console.log(global);

    // console.log(add(10,20));
    // console.log(sub(8,3));
    // console.log(__dirname);
    // console.log(__filename);
    // console.log(path.basename(__filename));
    // console.log(path.extname(__filename));
    // console.log(path.parse(__filename));
    // console.log(path.parse(__filename).ext);
    // File manager

    // crFile(); 
    // create file

    // createfile();
    // readFile();
    
    appendFile();
    return "debug media";
}

console.log(myfun());
