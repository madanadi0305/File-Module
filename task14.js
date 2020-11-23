const fs=require('fs');
const path=require('path');
function IOCount(filePath){
var countObj={};
return new Promise((res,rej)=>{
fs.readFile(filePath,(err,data)=>{
if(err){
  rej("Error reading file");
}
else{
var data1=data.toString();
var varCount=0;
var functionCount=0;
var cont=data1.split(' '); 
for(var i=0;i<cont.length;i++){
if((cont[i]==='var')|| (cont[i]==='const') || (cont[i]==='let')){
varCount=varCount+1;
}
else if(cont[i]===')' || cont[i]===')=>{'){
functionCount=functionCount+1;
}
}
countObj.functionCount=functionCount;
countObj.variableCount=varCount;
res(countObj);
}
})

});


}
module.exports=IOCount;
