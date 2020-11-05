var fs=require('fs');
function fetchFilesAndDirectories(dirPath){
var countDir=0;
var countFile=0; 
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    rej("Error occured while reading directory");
}
else{
    var fileObj={};
for(var i=0;i<files.length;i++){
var fileElem=files[i];
//var fileNameArray=fileElem.split('');
fs.stat(fileElem,(err,stats)=>{
if(err){
    throw err;
}
else{
    if(stats.isFile(fileElem)){
        countFile=countFile+1;
    }
    else{
        countDir=countDir+1;
    }
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
