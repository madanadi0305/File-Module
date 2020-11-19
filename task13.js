var fs=require('fs');
var path=require('path');
function fileIO(directoryPath,index){
return new Promise((res,rej)=>{
//read the directory to fetch all files
fs.readdir(directoryPath,(error,files)=>{
if(error){
    rej("Error occured while fetching files from Directory");
}

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
fs.readFile(indexFilePath,'utf-8',(err,data)=>{
if(err){
    throw err;
}
else{
    if(String(data)===""||String(data)===null){
        throw err;
    }
    else{
        fileAtIndexObj.data=String(data);
        
    }
}


})
fs.stat(indexFilePath,(err,stats)=>{
fileAtIndexObj.size=stats.size;
fileAtIndexObj.birthTime=stats.birthtimeMs;

})

fileAtIndexObj.filename=fileName;
res(fileAtIndexObj);

})


    });
    
}
module.exports=fileIO;
