var fs=require('fs');
var path=require('path');
function fetchData(dirPath,index){
  return new Promise((res,rej)=>{
  fs.readdir(dirPath,(error,files)=>{
   if(error){
  rej("Error occured while fetching files from Directory");

   }
  else{
    var fileAtIndex;
    for(var i=0;i<files.length;i++){
   if(index===i){
   fileAtIndex=files[i];
   break;
   }

    }
fs.access(fileAtIndex,error=>{
if(error){
  throw error;
}
else{
  var obj={};
  var pathToFile=String(fileAtIndex);
  fs.readFile(fileAtIndex,'utf-8',(err,data)=>{
  if(err){
    throw err;
  }
  else{
    obj.data=data;
    obj.filename=path.basename(fileAtIndex);

    res(obj);
  }

  })
}

})


  }

  })

  });



}

module.exports=fetchData;
