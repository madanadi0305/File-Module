var fs=require('fs');
var path=require('path');
function count(directoryPath){
return new Promise((res,rej)=>{
fs.readdir(directoryPath,(err,files)=>{
if(err){
rej("Error occured while traversing directory");

}
else{
var countObj={};
var countDir=0;
var countSubDir=0;
var countFile=0;
for(var i=0;i<files.length;i++){
//var pathElem=directoryPath+"/"+String(files[i]);
var pathElem=files[i];
if(pathElem.lastIndexOf('.')!==-1){
    countFile=countFile+1;
}
//countSubDir=countSubDir+1;
//count(directoryPath+"/"+String(pathElem));
}
countDir=countDir+1;
count(directoryPath+"/"+String(pathElem));
}
countObj.countDir=parseInt(countDir);
countObj.countFile=countFile;
res(countObj);
})


});

}
module.exports=count;
