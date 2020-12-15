var fs=require('fs');
var path=require('path');
function fetchAndReturn(dirPath,index){
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
  rej("Error occured while fetching files from Directory");
}
else{
var obj={};
var pos=0;
for(var i=0;i<files.length;i++){
if(i===index){
pos=i;
break;
}


}
var filePath=dirPath+"/"+String(files[pos]);
fs.readFile(filePath,'utf-8',(err,data)=>{
if(err){
  throw new Error('Cannot read file');
}
var readContent=data;
obj.data=readContent;
obj.filename=path.basename(filePath);
res(obj);
})


}


})  


});



}
module.exports=fetchAndReturn;
