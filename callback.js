//JavaScript CallBack Function
function greet(name) {
console.log('hi' + ' ' + name)
}
greet('peter');
//example-2"

function greet1(name,callback) {
    console.log('hi'+' '+name)
    callback();
}
function callMe() {
console.log('i am callback func');
}
greet1("vinay",callMe);

// example-3
function display(val) {
    console.log(val);
}
function add(a,b,callback) {
    let res =  a+b;
   callback(res);
}
add(2,3,display);

// example-4
function greet2() {
    console.log('hello world');
}
function sayName(name){
    console.log('hello'+ ' ' + name);
}
setTimeout(greet2, 2000);
    sayName("viraj");

