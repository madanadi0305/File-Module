var fs=require('fs');
var path=require('path');
function fileStats(fileName){
return new Promise((resolve,reject)=>{
fs.stat(fileName,(err,data)=>{
if(err){
reject('Error occured while calculating stats');
}
else{
 var size=stat.size;   
resolve(size);

}

});


});


}
module.exports=fileStats;
