var path=require('path');
var fs=require('fs');
var task4=require('./task04');
function copyFileContents(sourceFile,destinationFile){
return new Promise((res,rej)=>{
task04.then(()=>{
 fs.copyFile(sourceFile,destinationFile,err=>{
     if(err){
         throw err;
     }
     else{
         res("Content copied successfully");
     }
 })   
}).catch(()=>{rej("cannot copy data : File exists");});


});


}
module.exports=copyFileContents;
