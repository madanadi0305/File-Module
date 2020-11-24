const fs=require('fs');
const path=require('path');
var checkExistence=require('./task04.js');

function copyContent(sourceFile,destinationFile){
var msg="cannot copy data : File exists";
return new Promise((res,rej)=>{
checkExistence(destinationFile).then(msg=>{rej("cannot copy data : File exists")}).catch(
fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
  rej(err);
}
else{
  res("Content copied successfully");
}

})
);
/*fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
  throw err;
}
else{
  res("Content copied successfully");
}

})*/


});


}
module.exports=copyContent;
//copyContent('Folder1/File1.txt','Folder1/File6.txt').then(msg=>{console.log(msg)}).catch(err=>{console.log(err)});
