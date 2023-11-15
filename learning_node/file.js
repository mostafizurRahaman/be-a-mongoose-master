const fs = require("fs");

// // read file synchronous way :
// const readData = fs.readFileSync("./text/text.txt");

// // write file synchronous way :
// const writeFile = fs.writeFileSync(
//    "./text/write.txt",
//    readData.toString() + `\n Thank you \n You did this task successfully`
// );




// console.log(readData.toString());
// console.log(writeFile);



// readfile asynchronously: 
fs.readFile('./text/text.txt', (err, data)=>{
   if(err){
      console.log(err); 
   }else{
      console.log(`------ > ---------> ->>>>>>`)
      console.log(data.toString()); 
   }
})



// write file asynchronously: 
fs.writeFile('./text/write.txt', 'nex data found here', function(err){
   if(err){
      console.log(err);
   }
} )


fs.unlink('./text/write.txt', (err)=> {
   if(err){
      console.log(err); 
   }else{
      console.log(`unlink console:-----> ---> successfully done`); 
      
   }
})



fs.rename('./text/data.txt', './text/myData.txt', (err)=>{
   if(err){
      console.log(err); 
   }else{
      console.log("--> Rename success ---------->"); 
   }
})