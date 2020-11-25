const fs=require('fs');
const path=require('path');
const taskFour=require("./task04");
async function copyContent(sourceFile,destinationFile){
return new Promise((res,rej)=>{
taskFour(destinationFile).then((res)=>
{rej("cannot copy data : File exists");}

).catch((err)=>{
/*fs.copyFile(sourceFile,destinationFile,(err)=>{
if(!err){
 res("Content copied successfully");

}
else{
   
rej('ERROR WHILE COPYING INTO THE FILE');
}
})*/

console.log(err);
});
fs.copyFile(sourceFile,destinationFile,err=>{
if(err){
rej(err);

}
else{
    res("Content copied successfully");
}
})

});


}


module.exports=copyContent;
