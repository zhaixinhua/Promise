let Promise = require("./Promise")
let promise = new Promise(function(resolve,reject){
   console.log("Promise");
   setTimeout(()=>{
    resolve("resolve 1");
   },1000)
});
promise.then((arg)=>{
    console.log(arg);
},(arg)=>{
    console.log(arg);
}).catch((arg)=>{
    console.log(arg); 
})