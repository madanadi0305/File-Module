var fs=require('fs');
function checkFileExistsAndRead(pathToFile){
return new Promise((res,rej)=>{
fs.access(pathToFile,err=>{
if(err){
rej("File does not exists");

}
else{
fs.readFile(pathToFile,'utf-8',(err,data)=>{
if(err){
    throw new Error('Error reading file');
}
res(data.toString());

})

}

})


});



}

module.exports=checkFileExistsAndRead;
