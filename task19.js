var path=require('path');
var fs=require('fs');
var task4=require('./task04');
function copyFileContents(sourceFile,destinationFile){
return new Promise((res,rej)=>{
task4.then(()=>{
 rej("cannot copy data : File exists");
}).catch(()=>{
fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
    throw new Error('Cannot copy file');
}
else{
    res("Content copied successfully");
}
})


});


});


}
module.exports=copyFileContents;
