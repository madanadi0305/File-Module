const fs=require('fs');
const path=require('path');
const arrayOfFiles=(directoryPath)=>{
return new Promise((res,rej)=>{
 fs.readdir(directoryPath,async(err,files)=>{
if(err){
  rej("Error occured while reading directory");
}
else{
//let subDirCount;
var fileArray=[];
for(var i=0;i<files.length;i++){
if(files[i].includes('.')){
fileArray.push(files[i]);

}
else{

var subPath=directoryPath+"/"+String(files[i]);
let subDirectory=await arrayOfFiles(subPath); 
fileArray.push(subDirectory);
}

}

res(fileArray);

}
})


});

}; 

module.exports=arrayOfFiles;
