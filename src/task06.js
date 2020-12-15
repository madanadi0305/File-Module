var fs=require('fs');
function fetchAndCount(dirPath){
var countJs=0;
var countTxt=0;
var count=0;
var totalCount=0;
return new Promise((res,rej)=>{
fs.readdir(dirPath,(err,files)=>{
if(err){
    rej("Error occured while reading directory");
}

else{
    var filesObj={};
//var totalCount=0;    
for(var i=0;i<files.length;i++){
var fileName=files[i];
totalCount=totalCount+1;
var fileNameArray=fileName.split(".");
var extension=fileNameArray[1];
if(String(extension)==='js'){
countJs=countJs+1;
}
else if(String(extension)==='txt'){
    countTxt=countTxt+1;
}


}
count=totalCount-countJs-countTxt;
filesObj.countJs=countJs;
filesObj.countTxt=countTxt;
filesObj.count=count;
filesObj.files=files;
res(filesObj);
}

});


});
}

module.exports=fetchAndCount;


