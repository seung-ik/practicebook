"use strict";
exports.__esModule = true;
var value = rand();
var str = value;
// console.log(str * 10);
function rand() {
    return "wowo";
}
var Shape;
(function (Shape) {
    Shape[Shape["squre"] = 0] = "squre";
    Shape[Shape["rectangle"] = 1] = "rectangle";
    Shape[Shape["circle"] = 2] = "circle";
})(Shape || (Shape = {}));
var userShape = Shape.squre;
console.log(Shape.squre);
// let marry: Pair<string> = [10,20]
var marry2 = ["tmddlr", "tksk"];
var book = {
    name: "stock",
    read: function () {
        console.log("i am reading a " + this.name + " book");
    }
};
function reader(b) {
    console.log(b.read);
}
