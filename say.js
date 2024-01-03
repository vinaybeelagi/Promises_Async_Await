function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye};

  //
  export default class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }