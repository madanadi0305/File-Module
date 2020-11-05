var fs=require('fs');
function fetchFilesAndDirectories(dirPath){
var countDir=0;
var countFile=0;
var fileObj={}; 
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    rej("Error occured while reading directory");
}
else{
    
for(var i=0;i<files.length;i++){
var fileElem=files[i];

fs.stat(fileElem,(err,fileElem)=>{
if(err){return 0;}


if(fileElem.isDirectory()){
    countDir=countDir+1;
}
if(!fileElem.isDirectory()){
    countFile=countFile+1;
}

});
//countDir=countDir+1;
}
   
fileObj.countDir=countDir;
fileObj.countFile=countFile;
fileObj.files=files;
res(fileObj);
}

});

});


}
