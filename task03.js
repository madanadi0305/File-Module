const path=require('path');
const fs=require('fs');
function fileStats(pathToFile){
var fileStats={};
return new Promise((res,rej)=>{
fs.stat(pathToFile,(err,stats)=>{
if(err){
    rej('Error opening file stats');
}
else{
fileStats.birthTime=stats.birthtimeMs;
fileStats.modifiedTime=stats.mtimeMs;
fileStats.size=stats.size;
if(stats.isFile()){
  fileStats.type='file';  
}
else{
    fileStats.type='directory';
}
res(fileStats);
}
});
//return fileStats;



});

}
module.exports=fileStats;
