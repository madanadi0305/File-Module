var fs=require('fs');
//var path=require('path');
function fetchFiles(dirPath){
//var finalDirectoryPath=path.dirname(dirPath);
return new Promise((res,rej)=>{
fs.readdir(dirPath,(error,files)=>{
if(error){
    //error="Error occured while reading directory";
    rej("Error occured while reading directory");
    //throw error;
}
else{
    res(files);
}

});

});

}

module.exports=fetchFiles;
