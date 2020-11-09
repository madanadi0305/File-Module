var fs=require('fs');
//var path=require('path');
function checkFileExists(pathFile){
 //var finalPath=path.dirname(pathFile);   
return new Promise((res,rej)=>{
 fs.access(pathFile,err=>{
  if(err){
   rej('File does not exists');   
  } 
  else{
   res('File exists');  
  }  
 });   
});  
}
checkFileExists('help1.txt').then(res=>{console.log(res);}).catch(err=>{console.log(err.message)});
module.exports=checkFileExists;
