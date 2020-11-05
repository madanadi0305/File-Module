const path=require('path');
const fs=require('fs');
function fileStats(pathToFile){
var fileStats={};
return new Promise((res,rej)=>{
fs.stat(pathToFile,(err,stats)=>{
if(err){
    rej('Error occured while calculating stats');
}
else{
fileStats.birthTime=stats.birthtimeMs;
fileStats.modifiedTime=stats.mtimeMs;
fileStats.size=stats.size;
if(stats.isFile()){
  fileStats.type=true;  
}
else{
    fileStats.type=false;
}
res(fileStats);
}
});
//return fileStats;



});

}
module.exports=fileStats;
