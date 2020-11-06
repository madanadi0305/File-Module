var fs=require('fs');
var existOrNot=require('./task04');
function deleteDirectory(pathToDirectory){
return new Promise((res,rej)=>{
fs.rmdir(pathToDirectory,error=>{
var checkExist=existOrNot.checkFileExists(pathToDirectory);    
if(error){
if(!checkExist){    
rej('cannot remove directory because : File does not exists')
}
}
else{
res('File exists : Directory removed');

}

});


});



}

module.exports=deleteDirectory;
