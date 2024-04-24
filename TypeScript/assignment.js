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
var BasicCal = /** @class */ (function () {
    function BasicCal(a, b) {
        var _this = this;
        this.add = function () {
            return _this.a + _this.b;
        };
        this.sub = function () {
            return _this.a - _this.b;
        };
        this.mul = function () {
            return _this.a * _this.b;
        };
        this.div = function () {
            return _this.a / _this.b;
        };
        this.a = a;
        this.b = b;
    }
    BasicCal.myStatic = function () {
        return "this is basic calculator";
    };
    return BasicCal;
}());
BasicCal.prototype.sqrt = function () {
    return Math.sqrt(this.a);
};
var calc = new BasicCal(8, 4);
console.log(BasicCal.myStatic());
console.log("ADD -> ", calc.add());
console.log("SUB -> ", calc.sub());
console.log("MUL -> ", calc.mul());
console.log("DIV -> ", calc.div());
console.log("SQRT -> ", calc.sqrt());
var SciCal = /** @class */ (function (_super) {
    __extends(SciCal, _super);
    function SciCal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.log = function () {
            return Math.log(_this.a);
        };
        _this.sin = function () {
            return Math.sin(_this.a);
        };
        _this.cos = function () {
            return Math.cos(_this.a);
        };
        _this.tan = function () {
            return Math.tan(_this.a);
        };
        _this.exp = function () {
            return Math.exp(_this.a);
        };
        return _this;
    }
    SciCal.sciStatic = function () {
        return "this is scientific calculator";
    };
    return SciCal;
}(BasicCal));
var t = new SciCal(12, 4);
console.log(SciCal.sciStatic());
console.log("ADD -> ", t.add());
console.log("SUB -> ", t.sub());
console.log("MUL -> ", t.mul());
console.log("DIV -> ", t.div());
console.log("SQRT -> ", t.sqrt());
console.log("LOG -> ", t.log());
console.log("SIN -> ", t.sin());
console.log("COS -> ", t.cos());
console.log("TAN -> ", t.tan());
console.log("EXP -> ", t.exp());
