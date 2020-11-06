var fs=require('fs');
function fetchFilesAndDirectories(dirPath){
var countDir=0;
var countFile=0;
var fileObj={}; 
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,pathContents)=>{
if(err){
    rej("Error occured while reading directory");
}
else{
    
for(var i=0;i<pathContents.length;i++){
var pathElem=pathContents[i];
fs.stat(pathElem,(err,stats)=>{
if(err){
    throw err;
}
else{
    if(stats.isFile()===true){
        countFile=countFile+1;
    }
    else 
    {
        countDir=countDir+1;
    }
}

});

}
   
fileObj.countDir=countDir;
fileObj.countFile=countFile;
fileObj.files=files;
res(fileObj);
}

});

});


}
