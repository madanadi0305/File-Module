var path=require('path');
var fs=require('fs');

function fileAndIndex(dirPath,index){
    
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    rej("Error occured while fetching files from Directory");
}
else{
var filePath;    
var pos=0;
var fileObj={};    
for(var i=0;i<files.length;i++){
if(i===index){
pos=i;
}


}
var path1=String(dirPath)+"/"+String(files[pos]);
filePath=path.basename(path1);
fs.readFile(filePath,'utf-8',(err,data)=>{
if(err){
throw err;

}
else{
    var readContent=data;
    fileObj.data=String(readContent);
    
    //fileObj.filename=filePath;
}
})

fs.stat(filePath,(err,stats)=>{
    if(err){
        throw err;
    }
   else{
       fileObj.size=stats.size;
       fileObj.birthTime=stats.birthtimeMs;
   }
    })
//var fileArray=filePath.split('.');
fileObj.filename=String(filePath);
res(fileObj);
}
})

});


}
module.exports=fileAndIndex;
