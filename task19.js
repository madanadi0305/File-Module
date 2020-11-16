var path=require('path');
var fs=require('fs');
//var task4=require('./task04');
import {checkFileExists} from './task04';
function copyOperation(source,destination){
return new Promise((res,rej)=>{
checkFileExists(destination).then(
 ()=>{
     rej("cannot copy data : File exists");}   
)
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
