var fs=require('fs');
function checkFileExists(pathFile){
return new Promise((res,rej)=>{
 fs.access(pathFile,err=>{
  if(err){
   res('File exists');   
  } 
  else{
   rej('File does not exist');  
  }  
 });   
});  
}
module.exports=checkFileExists;
