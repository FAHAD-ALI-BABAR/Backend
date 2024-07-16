//first import fs from nodejs
const fs = require('node:fs');
// // //now create a file
// // //syntax is ("filename","filedata","callback"){}
// fs.writeFile("fahad.txt","My name is fahad",function(err){
//     if(err){
//           console.log(err);
//     }
//     else{

//         console.log("Successfully");
//     }
// })
// //now you can see a file fahad.txt has been created
// //-------------*************************************--------------------->

// //now we will append a file.append means add further into that data
// //sysntax is a same as create file
// fs.appendFile("fahad.txt","And i study in University",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully appended");
//     }
// })
// //now you can see that the text is appended to the information in fahad.txt file

// //now we will see how to rename a file
// //syntax is ("oldfilename","newfilename","calback")
// fs.rename("fahad.txt","hey.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })
// //the file is renamed to hey.txt

// //now we will see how to copy a file to another destination

// fs.copyFile("hey.txt","./copy/copy.txt",function(err){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("copy successfully");
//     }
// })
//now we will delete the file by using unlink
// fs.unlink("fahad.txt",function(err){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("Unlinked");
//     }
// })
//now we will delete a folder/directory
fs.rm("./copy",{recursive:true},function(err){//wew ill use recusisive true to delete a directory if it contains files
    if(err){
        console.log(err.message);
    }
    else{
        console.log("deleted");
    }
})