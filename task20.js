const fs=require('fs');
const path=require('path');
const checkExist=require('./task04.js');
function appendContent(filePath,content){
 var data=String(content);   
return new Promise((res,rej)=>{
checkExist(filePath).then(
 fs.appendFile(filePath,data,err=>{
if(err){
rej(err);
}
else{
    res("Data appended successfully");
}
 })   
).catch(err=>
rej("Cannot append data because : File does not exists")
)


});


}
module.exports=appendContent;
