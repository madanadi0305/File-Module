const fs=require('fs');
const path=require('path');
var checkExistence=require('./task04.js');

function copyContent(sourceFile,destinationFile){
//var msg="cannot copy data : File exists";
return new Promise((res,rej)=>{
checkExistence(destinationFile).then(
  //promise is resoolved for file existence according to task04 so we will reject with a message
fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
rej("cannot copy data : File exists");

}

else{
  res("Content copied successfully");
}

})

).catch(err=>{console.log(err)});





});


}
module.exports=copyContent;
//copyContent('Folder1/File1.txt','Folder1/File6.txt').then(msg=>{console.log(msg)}).catch(err=>{console.log(err)});
