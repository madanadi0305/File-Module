const fs=require('fs');
const path=require('path');
const countDirsAndFiles=(directoryPath)=>{
return new Promise((res,rej)=>{
 fs.readdir(directoryPath,async(err,files)=>{
if(err){
  rej("Error occured while traversing directory");
}
else{
//let subDirCount;
var countObj={};
var countFiles=0;
var countDir=0;
for(var i=0;i<files.length;i++){
if(files[i].includes('.')){
countFiles=countFiles+1;

}
else{
countDir=countDir+1;
var subPath=directoryPath+"/"+String(files[i]);

let subDirCount=await countDirsAndFiles(subPath);
countFiles=countFiles+(subDirCount.countFile);
countDir=countDir+subDirCount.countDir;

}

}
countObj.countDir=countDir;
countObj.countFile=countFiles;
res(countObj);

}
})


});

}; 

//countDirsAndFiles('Folder1').then(res=>{console.log(res)}).catch(err=>{console.log(err)});

module.exports=countDirsAndFiles;
