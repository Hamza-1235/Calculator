const result = document.getElementById("inputext");
function calculate(number) {
    result.value += number;
}
function Result() {
    const regex = /^[\d\+\-\*\/\(\)\.\s]+$/;

    if (!regex.test(result.value)) {
        throw new Error("Please enter a valid expression");
        return;
    }
    try {
        const calculatedValue = eval(result.value);
        result.value = calculatedValue;
    } catch (err) {
        alert("Please Enter Valid Input");
    }
}
function clr() {
    result.value = "";
}
function del() {
    result.value = result.value.slice(0, -1);
}
