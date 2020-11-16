var path=require('path');
var fs=require('fs');
//var task4=require('./task04');
var task4=require('./task04');

function copyOperation(source,destination){
var fileExists=task4.checkFileExists(destination);
return new Promise((res,rej)=>{
fileExists.then(
 ()=>{
     rej("cannot copy data : File exists");}   
).catch(err=>{console.log(err);})
fs.copyFile(source,destination,err=>{
if(err){
    throw err;
}
else{
    res("Content copied successfully");
}
})
});



}
module.exports=copyOperation;
