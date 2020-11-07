var fs=require('fs');
function fetchAndRetrieve(pathToDir,index){
return new Promise((res,rej)=>{
fs.readdir(pathToDir,(err,files)=>{
if(err){
rej("Error occured while fetching files from Directory");

}
else{
 var fileAtIndexObj={};
 var fileAtIndex;   
for(var i=0;i<files.length;i++){
if(i===index){
fileAtIndex=files[i];
break;
}

}
fs.readFile(fileAtIndex,'utf-8',(err,data)=>{
if(err){
  throw err;
    //throw new Error('Error reading file');
//console.log(err);
}
fileAtIndexObj.data=data;
fileAtIndexObj.filename=fileAtIndex;
res(fileAtIndexObj);

})


}

})



});



}


module.exports=fetchAndRetrieve;
