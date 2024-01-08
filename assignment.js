var inputboxes = document.getElementsByClassName("input1")
var inputbox1
var inputbox2
function addition(){
    inputbox1 =inputboxes[0].value
    inputbox2 =inputboxes[0].value
    var result =parseInt(inputbox1) + parseInt(inputbox2)
    var strong =document.getElementById("output")
    strong.innerHTML = inputbox1 + "+" + inputbox2 +"="+result
    var field = document.getElementById("answer")
    field.style.backgroundColor = "blue"
    field.style.color = "white"
}
function subtraction(){
    inputbox1 = inputboxes[0].value
    inputbox2 = inputboxes[1].value
    var result = inputbox1 - inputbox2
    var strong = document.getElementById("output")
    strong.innerHTML = inputbox1 + "-"+ inputbox2 + "="+ result
}
