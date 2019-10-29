var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var _loop_1 = function (num) {
    array.forEach(function (value) {
        var test = num * value;
        console.log(test);
    });
};
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var num = array_1[_i];
    _loop_1(num);
}
