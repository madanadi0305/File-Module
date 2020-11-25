var fs=require('fs');
var checkExist=require('./task04');
function appendContent(file,content){
return new Promise((resolve,reject)=>{
checkExist(file).then(result=>{
fs.appendFile(file,content,err=>{
if(!err){
resolve("Data appended successfully");
    //throw (err);
}
else{reject(err);}

})

}).catch(err=>{
    reject("Cannot append data because : File does not exists");

})


});


}
module.exports=appendContent;
