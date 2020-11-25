const fs=require('fs');
const path=require('path');
const checkExist=require('./task04.js');
function appendContent(filePath,content){
 var data=String(content);   
return new Promise((res,rej)=>{
checkExist(filePath).then(msg=>
 {fs.appendFile(filePath,data,err=>{
if(!err){
res("Data appended successfully");
}
else{
  rej(err);  
  }
 })
 }).catch(err=>
{rej("Cannot append data because : File does not exists");
//console.log(err);
}

);


});


}
module.exports=appendContent;
