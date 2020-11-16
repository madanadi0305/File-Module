var fs=require('fs');
var path=require('path');
function countFilesAndDirectories(dirPath){
var countDirs=0;
var countFiles=0;
var countObj={};
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    rej("Error occured while traversing directory");
}
for(var i=0;i<files.length;i++){
var elem=files[i];
var elemPath=dirPath+"/"+String(elem);
fs.stat(elemPath,(err,stats)=>{
if(err){
    throw err;
}
else{
if(stats.isFile()){
    countFiles=countFiles+1;
}
countDirs=countDirs+1;
}
})
}
countObj.countDir=parseInt(countDirs);
countObj.countFile=parseInt(countFiles);
res()
})


});


}

module.exports=countFilesAndDirectories;
