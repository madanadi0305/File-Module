var fs=require('fs');
var path=require('path');
function copyFileContents(sourcePath,destPath){
var readContent="";
return new Promise((res,rej)=>{
//check if source file exists or not
fs.access(sourcePath,err=>{
if(err){
rej("Source File does not exists");

}
else{
fs.readFile(sourcePath,'utf-8',(err,data)=>{
if(err){
    throw err;
}
else{
    readContent=data.toString();
}

})
fs.writeFile(destPath,readContent,err=>{
if(err){
    throw err;
    
}
else{
res("Content written to file successfully");
}
})
}


})
});
}
module.exports=copyFileContents;
