var fs=require('fs');
function appendData(pathToFile,writeContent){
return new Promise((res,rej)=>{
fs.access(pathToFile,err=>{
if(err){
    rej("File does not exists provide another name");
}
else{
fs.readFile(pathToFile,'utf-8',(err,data)=>{
if(err){
//throw new Error('Error reading file');
return 0;
}


//var readContent=data;
fs.writeFile(pathToFile,writeContent,err=>{
if(err){
    return 0;
}

    res("Content appended to file successfully");
})



})


}



});

});




}
module.exports=appendData;
