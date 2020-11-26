var fs=require('fs');
var path=require('path');
function count(directoryPath){
return new Promise((res,rej)=>{
fs.readdir(directoryPath,async(err,files)=>{
if(err){
rej("Error occured while traversing directory");

}
else{
var countObj={};
var countDir=0;

var countFiles=0;
for(var i=0;i<files.length;i++){

var pathElem=files[i];
if(pathElem.lastIndexOf('.')!==-1){
    countFiles=countFiles+1;
}


else{
countDir=countDir+1;
var subpath=directoryPath+"/"+String(pathElem);
let subDirectory=await count(subpath);
countDir=countDir+subDirectory.countDir;
countFiles=countFiles+subDirectory.countFiles;
}
}
countObj.countDir=countDir;
countObj.countFile=countFiles;
res(countObj);
}

})


});

}
module.exports=count;
