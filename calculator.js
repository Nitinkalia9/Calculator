 
let output = ""




appendToDisplay = (value) => {
    output += value
    console.log(output)
    document.getElementById("display").value = output

}
calculateResult = () => {
    document.getElementById('display').value = eval(document.getElementById('display').value)

}
clearDisplay = () => {
    output = ""
    document.getElementById("display").value = output
}