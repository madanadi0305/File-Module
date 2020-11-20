var path=require('path');
var fs=require('fs');
//var task4=require('./task04');
//var task4=require('./task04');
var taskFour=require('./task04.js');
function copyOperation(source,destination){
//var msg="cannot copy data : File exists";

return new Promise((res,rej)=>{
taskFour(destination).then(
 (msg)=>
     {rej(msg);}   
).catch(
fs.copyFile(source,destination,err=>{
if(err){
    console.log(err);
}
else{
    res("Content copied successfully");
}
})

)

});
}
module.exports=copyOperation;
