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
var readContent=data.split(' ');

for(var content in readContent){
if(typeof content==='function'){
funcCount=funcCount+1;

}
else if(typeof content==='string'|| typeof content==='number'|| typeof content==='undefined'||typeof content==='boolean')
{varCount=varCount+1;

}

}
countObj.functionCount=funcCount;
countObj.variableCount=varCount;
})


}); 



}
module.exports=getCount;
