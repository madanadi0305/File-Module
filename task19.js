var path=require('path');
var fs=require('fs');
var task4=require('./task04');
function copyFileContents(sourceFile,destinationFile){
 //var destPath=path.basename(destinationFile);   
return new Promise((res,rej)=>{
task4.checkFileExists(destinationFile).then(()=>{
 rej("cannot copy data : File exists");
}).catch(()=>{
fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
    throw err;
}
else{
    res("Content copied successfully");
}
})


});


});


}
module.exports=copyFileContents;
