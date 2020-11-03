var path=require('path');
function fileOperation(pathToFile,position,stringAppend){
var obj={};
var baseName=path.basename(pathToFile);
var dirName=path.dirname(pathToFile);
obj.dirName=dirName;
obj.baseName=baseName;
var finalPath;
if(String(position)==='start'){
    finalPath=path.join(stringAppend,pathToFile);
}
else{
    finalPath=path.join(pathToFile,stringAppend);
}
obj.finalPath=finalPath;
return obj;
}
module.exports=fileOperation;
