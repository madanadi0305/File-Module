var fs=require('fs');
function deleteFile(pathToFile){
return new Promise((res,rej)=>{
fs.unlink(pathToFile,err=>{
if(err){
    rej("error deleting file");
}
else{
    res("File deleted successfully");
}
})


});


}
module.exports=deleteFile;
