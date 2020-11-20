var fs=require('fs');
var path=require('path');
var four=require('./task04');
function copyFiles(sourcePath,destinationPath){
return new Promise((resolve,reject)=>{
four(destinationPath).then(
    //if destination file exists
 reject("cannot copy data : File exists")   
).catch(
//not exists create one
fs.copyFile(sourcePath,destinationPath,err=>{
if(err){
    //reject(err);
    return err;
}
else{
    resolve("Content copied successfully");
}
})

);


});


}
module.exports=copyFiles;
