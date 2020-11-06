var fs=require('fs');
var task04=require('./task04');
function deleteDirectory(pathToDirectory){
return new Promise((res,rej)=>{
fs.rmdir(pathToDirectory,error=>{
//var checkExist=task04.checkFileExists(pathToDirectory);    
if(error){
//if(checkExist===true){    
rej('cannot remove directory because : File does not exists')
//}
}
else{
res('File exists : Directory removed');

}

});


});



}

module.exports=deleteDirectory;
