var fs=require('fs');
var path=require('path');
function funcCount(filePath){
return new Promise((res,rej)=>{
fs.readFile(filePath,'utf-8',(err,data)=>{
if(err){
    rej("Error reading file");
}
else{
var functionCount=0;
var variableCount=0;    
var countObj={};
var contents=data;
for(var content in contents){
    
if((content==='function')||(content===') =>')){
    functionCount=functionCount+1;
}
else if(content==='let'||content==='var'||content==='const'){
    variableCount=variableCount+1;
}
}
countObj.functionCount=(functionCount);
countObj.variableCount=(variableCount);
res(countObj);
}

})


});


}
module.exports=funcCount;
