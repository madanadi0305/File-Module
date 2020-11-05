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
fileStats.birthTime=stats.birthtime;
fileStats.modifiedTime=stats.modifiedtime;
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
