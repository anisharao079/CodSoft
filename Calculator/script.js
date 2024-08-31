function insert(value) {
    document.getElementById('text').value += value;
}
function clearDisplay() {
    document.getElementById('text').value="";
}
function back() {
    let display = document.getElementById('text').value;
    document.getElementById('text').value = display.slice(0, -1);
}
function equal() {
    let expression = document.getElementById('text').value;
    try {
        document.getElementById('text').value = eval(expression);
    } catch (e) {
        document.getElementById('text').value = "Error";
    }
}

