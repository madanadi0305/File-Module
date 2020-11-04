var fs=require('fs');
var path=require('path');
function checkFileExists(pathFile){
 var finalPath=path.dirname(pathFile);   
return new Promise((res,rej)=>{
 fs.access(finalPath,err=>{
  if(err){
   res('File exists');   
  } 
  else{
   rej('File does not exists');  
  }  
 });   
});  
}
module.exports=checkFileExists;
