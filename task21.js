var fs=require('fs');
function makeDirectory(pathToFile){
return new Promise((res,rej)=>{
fs.mkdir(pathToFile,err=>{
if(err){
    rej("Error occured while making directory");
}
else{
    res("New directory created");
}

});

});



}

module.exports=makeDirectory;
