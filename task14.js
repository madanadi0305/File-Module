const fs=require('fs');
const path=require('path');
function IOcount(filePath){
var varCount=0;
return new Promise((res,rej)=>{
fs.readFile(filePath,(err,data)=>{
if(err){
  rej("Error reading file");
}
else{
  var contentArray=[];
  contents=data.toString();
  var contents1=contents.split(' ');
//console.log(contents1); 
for(var i=0;i<contents1.length;i++){
if((contents1[i]==='let') || (contents1[i]==='var')||(contents1[i]==='const'))
{console.log(contents1[i]);
  varCount=varCount+1;
}
}
res(varCount);

}
})

});


}
//module.exports=IOcount;
IOcount('helper1.js').then(msg=>{console.log(msg)}).catch(err=>{console.log(err)});





