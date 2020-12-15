var fs=require('fs');
function writeData(filePath,write_data){
return new Promise((res,rej)=>{
fs.writeFile(filePath,write_data,err=>{
if(err){
    rej("Error writing content in file");
}

else{
    res("Content written to file successfully");
}

})


});

}
module.exports=writeData;
