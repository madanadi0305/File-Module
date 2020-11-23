var fs=require('fs');
var path=require('path');
function funcCount(filePath){
return new Promise((res,rej)=>{
fs.readFile(filePath,(err,data)=>{
if(err){
    rej("Error reading file");
}
else{
var functionCount=0;
var variableCount=0;    
var countObj={};
var contents=data.toString();
for(var content in contents){
    
if(((content)==='){')||((content)==='()=>{')){
    functionCount=functionCount+1;
}
else if(content==='let'|| content==='var'){
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
