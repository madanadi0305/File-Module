const fs=require('fs');
const path=require('path');
const taskFour=require('./task04');
function copyContent(sourceFile,destinationFile){
return new Promise((res,rej)=>{
taskFour(destinationFile).then(()=>
{rej("cannot copy data : File exists");}

).catch(()=>{
fs.copyFile(sourceFile,destinationFile,(err)=>{
if(err){
rej('ERROR WHILE COPYING INTO THE FILE');

}
//else{
    res("Content copied successfully");
//}
})


});


});


}
module.exports=copyContent;
