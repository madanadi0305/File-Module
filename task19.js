const fs=require('fs');
const path=require('path');
const checkExistFile=require('./task04.js');
function copyContents(source,destination){
return new Promise((res,rej)=>{
checkExistFile(destination).then(
  rej("cannot copy data : File exists")
).catch(err=>
fs.copyFile(source,destination,err=>{
if(err){
  rej(err);

}
else{
  res("Content copied successfully");
}
})

);

});


}
module.exports=copyContents;
