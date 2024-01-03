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