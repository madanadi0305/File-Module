var path=require('path');
var fs=require('fs');
function fileAndIndex(dirPath,index){
    
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    rej("Error occured while fetching files from Directory");
}
else{
var pos=0;
var fileObj={};    
for(var i=0;i<files.length;i++){
if(i===index){
pos=i;
}


}
var path1=String(dirPath)+"/"+String(files[pos]);
var filePath=path.basename(path1);
fs.readFile(filePath,(err,data)=>{
if(err){
throw err;

}
else{
    var readContent=data.toString();
    fileObj.data=readContent;
    fs.stat(filePath,(err,stats)=>{
    if(err){
        throw err;
    }
   else{
       fileObj.size=stats.size;
       fileObj.birthTime=stats.birthtimeMs;
   }
    })
    fileObj.filename=filePath;
}
})
}
})

});


}
module.exports=fileAndIndex;
