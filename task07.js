var fs=require('fs');
function fetchAndCount(dirPath){
return new Promise((res,rej)=>{
    fs.readdir(dirPath,(error,files)=>{
    if(error){
    rej("Error occured while reading directory");

    }
else{
   var obj={};
   var dirCount=0;
   var fileCount=0;
   for(var i=0;i<files.length;i++){
       var file=files[i];
       if(file.includes('.')){
           fileCount=fileCount+1;
       }
    else{
        dirCount=dirCount+1;
    }
   }

obj.countDir=dirCount;
obj.countFile=fileCount;
obj.files=files;
res(obj);


}

})
});




}
module.exports=fetchAndCount;
