const fs=require('fs');
const path=require('path');
const taskFour=require("./task04");
const taskTwentyOne=require("./task21");
const taskTwentyTwo=require("./task22");
//const taskTwentyThree=require("./task23");
function deleteDirectory(pathToDelete){
return new Promise((res,rej)=>{
taskFour(pathToDelete).then((result)=>{
    taskTwentyTwo(pathToDelete).then(res("File exists : Directory removed")).catch((err)=>{rej(err)})
    
}).catch((err)=>{console.log(err)
//createDirectory
taskTwentyOne(pathToDelete).then(resp=>{
  
    
}).catch(err=>{rej(err)})
//deleteDirectory
taskTwentyTwo(pathToDelete).then(
 (result)=>{res("New directory created : Directory removed");}
)
});

});
}


module.exports=deleteDirectory;
