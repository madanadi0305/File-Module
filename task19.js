const fs=require('fs');
const four=require('./task04');
function copyContent(sourceFile,destinationFile){
return new Promise((res,rej)=>{
four(destinationFile).then((resp)=>
{fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
rej("cannot copy data : File exists");

}
res("Content copied successfully");
})
}).catch((err)=>console.log(err));


});


}
module.exports=copyContent;
