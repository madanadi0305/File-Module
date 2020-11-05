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
if(fileElem.includes(".")){
    countFile=countFile+1;
}
else{
   countDir=countDir+1; 
}

}
   
fileObj.countDir=countDir;
fileObj.countFile=countFile;
fileObj.files=files;
res(fileObj);
}

});

});


}
