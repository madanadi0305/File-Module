var fs=require('fs');
var path=require('path');

function arrayOfFiles(pathToDirectory){
var fileArray=[];
var dirPath=path.join(__dirname,pathToDirectory);
return new Promise((resolve,reject)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    reject("Error occured while reading directory");
}

for(var i=0;i<files.length;i++){
var pathElem=dirPath+"/"+String(files[i]);
var fileName=path.basename(pathElem);
if(fileName.lastIndexOf('.')!==-1){
    fileArray.push(fileName);
}
else{
//fileArray.push("[");
//create a new array and push the callback function in it
fileArray.push(arrayOfFiles(pathElem));
//fileArray.push("]");
}

}

resolve(fileArray);
})


});

}
module.exports=arrayOfFiles;
