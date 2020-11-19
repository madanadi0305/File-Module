var fs=require('fs');
var path=require('path');
function getArray(directoryPath){
return new Promise((res,rej)=>{
fs.readdir(directoryPath,(err,files)=>{})
if(err){
    rej("Error occured while reading directory");
}
else{
var fileArray=[];    
for(var i=0;i<files.length;i++){
var elem=files[i];
var pathElem=directoryPath+"/"+String(elem);
fs.stat(pathElem,(err,stats)=>{
 if(err){
     throw err;
 }   
else{
    if(stats.isFile()){
fileArray.push(path.basename(pathElem));

}
fileArray.push(getArray(pathElem));

}



})

}

}


});

}
module.exports=getArray;
