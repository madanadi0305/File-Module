var fs=require('fs');
var path=require('path');
function fetchAndGet(pathDirectory,index){
//var fileAtIndex;
return new Promise((res,rej)=>{
fs.readdir(pathDirectory,(err,files)=>{
if(err){
 rej("Error occured while fetching files from Directory");   
}
else{
 var pos=0;   
for(var i=0;i<files.length;i++){
if(i===index){
    pos=i;
    break;
}
}
var pathToFile=String(pathDirectory)+"/"+String(files[pos]);
var obj={};
//var readContent;
fs.readFile(pathToFile,'utf-8',(err,data)=>{
if(err){
    return err;
}
var readContent=data;
obj.data=readContent;
})

fs.stat(pathToFile,(err,stats)=>{
if(err){
    throw err;
}
obj.size=stats.size;
obj.birthTime=stats.birthtimeMs;
})

obj.filename=path.basename(pathToFile);

}
res(obj);
})
});


}

module.exports=fetchAndGet;
