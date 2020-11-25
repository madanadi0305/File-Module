const fs=require('fs');
const checkExist=require('./task04');
function appendContent(file,content){
return new Promise((resolve,reject)=>{
checkExist(file)
.then((result)=>{
fs.appendFile(file,content,err=>{
if(!err){
resolve("Data appended successfully");
    //throw (err);
}
else{
    reject(err);
    }

});

})
.catch((err)=>{
    reject("Cannot append data because : File does not exists");

});


});


}
module.exports=appendContent;


/*const taskFour = require('./task04');
const fs = require('fs');

function main(filePath, data) {
  return new Promise((resolve, reject) => {
    taskFour(filePath)
      .then((response) => {
        fs.appendFile(filePath, data, (err) => {
          if (!err) resolve('Data appended successfully');
          else reject('Error appending');
        });
      })
      .catch((err) => {
        reject('Cannot append data because : File does not exists');
      });
  });
}

module.exports = main;*/
