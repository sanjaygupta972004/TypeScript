"use strict";
// function in typescript
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
}
function getuser(name, email, isuserid, isuserlogin) {
    if (isuserlogin === void 0) { isuserlogin = true; }
}
var gethello = function (s) {
    return s;
};
function consoleerror(errmsg) {
    console.log(errmsg);
}
function errorhandle(errmsg) {
    throw new Error(errmsg);
}
var coursename = ["javascript", "python", "c#", "java", "machinelearning"];
var findcourse = coursename.map(function (value) {
    return "here is course ".concat(value);
    //return 4
});
console.log(findcourse);
var myvalue = addtwo(4);
console.log(myvalue);
getuser("john", "john34@gmail.com", 3343443);
gethello("hello india");
consoleerror("some syntax error");
errorhandle("not identify variable ");
