function normal(cb, num1, num2) {
    console.log(num1, num2, "number");
    cb()
}

function cb() {
    console.log("this is callback function");
    test()
}
normal(cb, 10, 20);

function test() {
    console.log("this is test function");
}
