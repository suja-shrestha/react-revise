function condition() {
    const a = "ram";
    if (a === "ram") {
        console.log("this is ram");

    }
    else if (a === "sita") {
        console.log("this is sita");
    }
    else {
        console.log("unknown user");

    }
    { a === "ram" ? console.log("this is ram") : console.log("unknown user") }
    const object = {
        name: "sujal",
        age: 20,
        city: "kathmandu"
    };
    console.log(object.name);
}
function add(num1, num2) {
    return num1 + num2;

}
function arrays(...num) {

    return num;
}
const numbers = arrays(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers[9]);

console.log(add(10, 20));

condition();

