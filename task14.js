var fs=require('fs');
var path=require('path');
function getCount(filePath){
return new Promise((res,rej)=>{
fs.readFile(filePath,'utf-8',(err,data)=>{
if(err){
    rej("Error reading file");
}
var countObj={};
var funcCount=0;
var varCount=0;
var readContent=String(data).split(' ');

for(var content in readContent){
if(typeof content==='function'){
funcCount=funcCount+1;

}
else if(content==='var'||content==='let'||content==='const'){
varCount=varCount+1;

}

}
countObj.functionCount=funcCount;
countObj.variableCount=varCount;
res(countObj);
})


}); 



}
module.exports=getCount;
