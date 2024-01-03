// async syntax
// async function f() {
//     return 1
// }
// f().then(alert)

// example with promise resolved
async function f() {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done!"),1000)
    });

    let result = await promise;
    console.log(result);
}
f();

// example-2
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();