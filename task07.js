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
var fetchObj={};   
for(var i=0;i<files.length;i++){
var pathElem=files[i].toString();
fs.stat(pathElem,(error,stats)=>{
console.log(stats);

});


}
fetchObj.countDir=countDir;
fetchObj.countFile=countFile;
fetchObj.files=files;
res(fetchObj);
}
});


});

}
module.export=countDirAndFiles;
