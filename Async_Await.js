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

// example-3
function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}
async function display() {
    let data = await asynchronous_operational_method();
    console.log(data)
}
display();

//task- Rewrite using async/await
async function loadJson(url) {
    let response = await fetch(url);
    if(response.status == 200) {
        let json = await response.json();
    }
    throw new Error(response.status);
}
 loadJson('https://javascript.info/no-such-user.json')
 .catch(err=>console.log(err));

//  task-Rewrite "rethrow" with async/await
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
  
    let user;
    while(true) {
      let name = prompt("Enter a name?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // no error, exit loop
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // loop continues after the alert
          alert("No such user, please reenter.");
        } else {
          // unknown error, rethrow
          throw err;
        }
      }
    }
  
  
    alert(`Full name: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();