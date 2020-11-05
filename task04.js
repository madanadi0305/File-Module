var fs=require('fs');
//var path=require('path');
function checkFileExists(pathFile){
 //var finalPath=path.dirname(pathFile);   
return new Promise((res,rej)=>{
 fs.access(pathFile,err=>{
  if(err){
   res('File exists');   
  } 
  else{
   rej('File does not exists');  
  }  
 });   
});  
}
//checkFileExists('help1.txt').then(res=>{console.log(res);}).catch(err=>{console.log(err.message)});
module.exports=checkFileExists;
