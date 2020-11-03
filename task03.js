const path=require('path');
const fs=require('fs');
function fileStats(pathToFile){
var fileStats={};
fs.stat(pathToFile,(err,stats)=>{
if(err){
    console.log('Error opening file stats');
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

}
});
return fileStats;
}
module.exports=fileStats;
