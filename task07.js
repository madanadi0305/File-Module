var fs=require('fs');
function countDirAndFiles(pathToDirectory){
return new Promise((res,rej)=>{
fs.readdir(pathToDirectory,(error,files)=>{
if(error){
    rej("Error occured while reading directory");
}
else{
var countDir=0;
var countFile=0;
var filesObj={};
for(var i=0;i<files.length;i++){
if(String(files[i]).includes('.')===true){
countFile=countFile+1;

}

else{
    countDir=countDir+1;
}

}

filesObj.countDir=countDir;
filesObj.countFile=countFile;
filesObj.files=files;
res(filesObj);
}
});


});

}
module.export=countDirAndFiles;
