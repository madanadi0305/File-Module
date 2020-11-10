var fs=require('fs');
var path=require('path');
function fetchAndGet(dirPath,index){
return new Promise((res,rej)=>{
fs.readdir(dirPath,(error,files)=>{
if(error){
    rej("Error occured while fetching files from Directory");
}
var obj={};
var pos=0;
for(var i=0;i<files.length;i++){
if(i===index){
    pos=i;
    break;
}

}
var filePath=dirPath+"/"+String(files[pos]);
fs.readFile(filePath,'utf-8',(err,data)=>{
if(err){
    throw err;
}

obj.data=String(data);


})
fs.stat(filePath,(err,stats)=>{
if(err){
    throw err;
}
obj.size=stats.size;
obj.birthTime=stats.birthtimeMs;
})


obj.filename=path.basename(filePath);
res(obj);
})




});



}
module.exports=fetchAndGet;
