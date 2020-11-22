var fs=require('fs');
var path=require('path');
function count(directoryPath){
return new Promise((res,rej)=>{
fs.readdir(directoryPath,(err,files)=>{
if(err){
    rej("Error occured while traversing directory");
}
var countFile=0;
var countDir=0;
var countObj={};
for(var i=0;i<files.length;i++){
var pathElem=String(files[i]);
//var pathFile=path.basename(pathElem);
if(pathElem.lastIndexOf('.')!==-1){
    countFile=countFile+1;
}
else
{
    var nextPath=pathElem+"/";
count(nextPath);
// contents/inContent
/*
File1.txt  1
File2.txt  2
File3.txt  3
File4.txt  4
File5.txt  5
 */

countDir=countDir+1;
}
count(pathElem);
countDir=countDir+1;
}

countObj.countDir=countDir;
countObj.countFile=countFile;
res(countObj);
})


});


}
module.exports=count;
