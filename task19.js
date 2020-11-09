var path=require('path');
var fs=require('fs');
var task4=require('./task04');
function copyFileContents(sourceFile,destinationFile){
return new Promise((res,rej)=>{
var destExists=task4.checkFileExists(path.basename(destinationFile));
if(destExists){
    rej("cannot copy data : File exists");
}
else{
fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
    throw err;
}
res("Content copied successfully");
})

//res();

}
});


}
module.exports=copyFileContents;
