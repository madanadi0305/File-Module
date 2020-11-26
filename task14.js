const fs=require('fs');
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
var content=cont[i];
if(content.includes('const')||content.includes('var')||content.includes('let')){
varCount=varCount+1;
}

else if(content.includes('function')|| content.includes('=>')){
functionCount=functionCount+1;
console.log(content);
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
//IOCount('Folder1/helper1.js').then(res=>{console.log(res)}).catch(err=>{console.log(err)});
