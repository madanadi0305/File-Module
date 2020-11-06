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
pathContents.forEach(element=>{
var stats=fs.statSync(element.toString());
if(stats.isFile()){
    countFile=countFile+1;
}
else{
    countDir=countDir+1;
}
});    

   
fileObj.countDir=countDir;
fileObj.countFile=countFile;
fileObj.files=files;
res(fileObj);
}

});

});


}
