//JavaScript CallBack Function
function greet(name) {
console.log('hi' + ' ' + name)
}
greet('peter');

function greet1(name,callback) {
    console.log('hi'+' '+name)
    callback();
}
function callMe() {
console.log('i am callback func');
}
greet1("vinay",callMe);