var fs=require('fs');
var path=require('path');
function fileIO(directoryPath,index){
return new Promise((res,rej)=>{
//read the directory to fetch all files
fs.readdir(directoryPath,(error,files)=>{
if(error){
    rej("Error occured while fetching files from Directory");
}
//else{
var fileAtIndexObj={};
var indexFilePath;
var pos;
for(var i=0;i<files.length;i++){
if(i===index){
pos=i;
break;
}

}
indexFilePath=directoryPath+"/"+String(files[pos]);
var fileName=path.basename(indexFilePath)
//var size=0;
var content;
//var birthTimeInMillis;
fs.readFile(indexFilePath,'utf-8',(err,data)=>{
/*if(err){
    console.log(err);
}*/

    
    content=data.toString();
     fileAtIndexObj.data=content;
     
    fs.stat(indexFilePath,(err,stats)=>{
if(err){
  throw err;
}
fileAtIndexObj.size=stats.size;
fileAtIndexObj.birthTime=stats.birthtimeMs;
fileAtIndexObj.filename=fileName;
//birthTimeInMillis=stats['birthtimeMs'];
//fileAtIndexObj.birthTime=stats.birthtimeMs;
res(fileAtIndexObj);
})
//}



})




//}
})
});
}
module.exports=fileIO;

//fileIO('Folder1',0).then(msg=>{console.log(msg);}).catch(err=>{console.log(err)});

