//  define all the modifire in code
// public /private/ readonly/protected
// same example transform in TS code 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(a) {
        this.personID = a;
        this.greeting = "Welcome";
        this.myRef = 800;
        console.log("peron object is innt-->");
        console.log("person is created by id-->" + this.personID);
    }
    // create private 
    Person.prototype.testPrivate = function () {
        console.log("call private -->");
        return "call private -->";
    };
    // create the public method here 
    Person.prototype.createPerson = function () {
        return this.greeting + "-" + "person created by method-->by id" + "-" + this.personID;
    };
    // previledge impl 
    Person.prototype.testPreMethod = function () {
        console.log("call the private one=-->");
        return this.testPrivate();
    };
    // Static 
    Person.testStatic = function () {
        return "test ststic-->";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.testStudent = function () {
        return "student is created by ref id--" + this.myRef;
    };
    return Student;
}(Person));
//let p = new Person(101);
var s = new Student(101);
console.log("call the public method-->" + s.createPerson());
console.log("call private here -->" + s.testPreMethod());
console.log("call the static-->" + Person.testStatic());
console.log("call the child one-->" + s.testStudent());
