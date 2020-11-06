var fs=require('fs');
function fetchFilesAndDirectories(dirPath){
var countDir=0;
var countFile=0;
var fileObj={}; 
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,pathContents)=>{
if(err){
    rej("Error occured while reading directory");
}
else{
for(var i=0;i<pathContents.length;i++){
var pathElem=pathContents[i];
var countOfPath=checkFileOrDirectory(pathElem);
countDir=countDir+countOfPath.dirCount;
countFile=countFile+countOfPath.fileCount;
}

   
fileObj.countDir=countDir;
fileObj.countFile=countFile;
fileObj.files=pathContents;
res(fileObj);
}

});

});


}

function checkFileOrDirectory(pathToDirectory){
var dirCount=0;
var fileCount=0;
var countObj={};
//return new Promise((res,rej)=>{
fs.stat(pathToDirectory,(err,stats)=>{
    if(err){
        console.log(err.message);
    }
    else{
   if(stats.isFile()){
   fileCount=fileCount+1;
   }
       else{
           dirCount=dirCount+1;
       }

    }
});
countObj.dirCount=dirCount;
countObj.fileCount=fileCount;
//});
return countObj;
}
