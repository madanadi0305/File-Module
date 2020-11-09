var fs=require('fs');
function fetchAndGet(pathDirectory,index){
var fileAtIndex;
return new Promise((res,rej)=>{
fs.readdir(pathDirectory,(err,files)=>{
if(err){
rej("Error occured while fetching files from Directory");

}
else{

for(var i=0;i<files.length;i++){
if(i===index){
fs.access(files[index],err=>{
if(err){
    throw err;
}
else{
    fileAtIndex=files[index];
}
})

break;
}

}
var obj={};
var data;
fs.readFile(fileAtIndex,'utf-8',(readContent,err)=>{
if(err){
    throw err;
}
else{
data=readContent;
}

})
obj.data=data;
fs.stat(fileAtIndex,(err,stats)=>{
if(err){
    throw err;
}
obj.size=stats.size;
obj.birthTime=stats.birthtimeMs;
obj.filename=fileAtIndex;
})
}

})


});


}

module.exports=fetchAndGet;
