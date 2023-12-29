const axios = require("axios");
const data = axios.get ("https://api.api-ninjas.com/v1/cats");
data.then((res)=>{
    console.log(res.data)
})
//  argument of .then is a function that runs when the promise is rejected and receives the error.
let promise = new Promise(function(resolve,reject) {
    setTimeout(()=> reject(new Error("whoops")),1000) 
});
promise.then(
    (result) => console.log(result),
    error => console.log(error)
)

// task-Re-resolve a promise?
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);
  //The output is: 1.The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.