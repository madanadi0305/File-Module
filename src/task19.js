const fs=require('fs');
const path=require('path');
const taskFour=require("./task04");
function copyContent(sourceFile,destinationFile){
return new Promise((res,rej)=>{
taskFour(destinationFile).then((res)=>
{rej("cannot copy data : File exists");}

).catch((err)=>{

fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
rej(err);

}
else{
    res("Content copied successfully");
}
})

console.log(err);
});

});


}


module.exports=copyContent;
