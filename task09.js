var fs=require('fs');
var path=require('path');
function countFilesAndDirectories(directoryPath){
var countDirs=0;
var countFiles=0;
var countObj={};
return new Promise((res,rej)=>{
fs.readdir(directoryPath,(err,files)=>{
if(err){
    rej("Error occured while traversing directory");
}
else{
for(var i=0;i<files.length;i++){
var elem=files[i];
var elemPath=directoryPath+"/"+String(elem);
fs.stat(elemPath,(err,stats)=>{
if(err){
    throw err;
}
else{
if(stats.isFile()===true){
    countFiles=countFiles+1;
}

else if(stats.isDirectory()===true){
countDirs=countDirs+1;
countFilesAndDirectories(elemPath);
}

}
})
}
countObj.countDir=parseInt(countDirs);
countObj.countFile=parseInt(countFiles);
res(countObj);
}
})


});


}

module.exports=countFilesAndDirectories;
