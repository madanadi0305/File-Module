var fs=require('fs');
function fetchAndWrite(pathToFile,writeData){
return new Promise((res,rej)=>{
fs.access(pathToFile,err=>{
if(err){
 fs.writeFile(pathToFile,writeData,err=>{
if(err)
{
    throw err;
}
else{
    res("Content written to file successfully");
}
 })   

}
else{
    rej("File already exists provide another name");
}

})


});

}
module.exports=fetchAndWrite;

