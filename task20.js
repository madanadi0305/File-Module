var fs=require('fs');
var checkExist=require('./task04');
function appendContent(file,content){
return new Promise((resolve,reject)=>{
checkExist(file).then(
fs.appendFile(file,content,err=>{
if(err){
    throw (err);
}
resolve("Data appended successfully");
})

).catch
(
    reject("Cannot append data because : File does not exists")
    );


});


}
module.exports=appendContent;
