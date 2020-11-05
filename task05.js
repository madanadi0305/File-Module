var fs=require('fs');
var path=require('path');
function fetchFiles(dirPath){
var finalDirectoryPath=path.dirname(dirPath);
return new Promise((res,rej)=>{
fs.readdir(path,(error,files)=>{
if(error){
    rej("Error occured while reading directory");
}
else{
    res(files);
}

});

});

}

module.exports=fetchFiles;
