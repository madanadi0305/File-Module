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
if(files.length===0){
throw new Error('files is empty cannot insert data in object');
}
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
fs.readFile(indexFilePath,(err,data)=>{
if(err){
    console.log(err);
}
else{
    /*if((data)===""||(data)===null||data===undefined){
        content="";
    }*/
    /*else{
        //fileAtIndexObj.data=String(data);
       
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
}



})




//}
})
});
}
module.exports=fileIO;

//fileIO('Folder1',0).then(msg=>{console.log(msg);}).catch(err=>{console.log(err)});

