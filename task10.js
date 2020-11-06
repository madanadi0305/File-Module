var fs=require('fs');
function fetchContent(pathToFile){
return new Promise((res,rej)=>{
fs.readFile(pathToFile,'utf-8',(err,data)=>{
if(err){
rej("Error reading file");

}
else{
res(data.toString());

}

});


});


}

module.exports=fetchContent;
