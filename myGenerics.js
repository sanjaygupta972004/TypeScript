"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var names = ["Sanjay", "Sunny", "Sneha", "Sachin", "Sachin"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identithyThree(val) {
    return val;
}
//identithyThree(false)
var identityFour = function (val) {
    return val;
};
identityFour({
    name: "Sunny",
    price: 100
});
function getProducts(product) {
    return product[0];
}
var anotherFunction = function (val1, val2) {
    return val2;
};
anotherFunction("", {
    connection: "localhost",
    password: "password",
    dbname: "dbname"
});
var sellCourse = /** @class */ (function () {
    function sellCourse(course) {
        this.course = [];
        this.course = course;
    }
    sellCourse.prototype.addCourse = function (course) {
        this.course.push(course);
    };
    return sellCourse;
}());
var course1 = new sellCourse([
    {
        name: "Sunny",
        subject: "Maths"
    }
]);
