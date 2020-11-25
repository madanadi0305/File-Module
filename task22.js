var fs=require('fs');
var path=require('path');
var checkExistence=require('./task04.js');
function deleteDirectory(pathToDirectory){
return new Promise((res,rej)=>{
checkExistence(pathToDirectory).then(
    fs.rmdir(pathToDirectory,err=>{
        if(err)
        {rej("cannot remove directory because : File does not exists")
            //console.log(err);
           // return new Error(err);
        }
        res("File exists : Directory removed");
        })).catch(err=>{console.log(err)}
           // rej("cannot remove directory because : File does not exists")
            );

});

}

module.exports=deleteDirectory;
