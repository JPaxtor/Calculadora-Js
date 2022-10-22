var btn = document.querySelector(`.btnN`)
var btn1 = document.querySelector(`.btn1`)
var btn2 = document.querySelector(`.btn2`)
var btn3 = document.querySelector(`.btn3`)
var btn4 = document.querySelector(`.btn4`)
var btnSum = document.querySelector(`.suma`)
var operaciones = document.querySelector(`.operaciones`)

print1 = () =>{
    operaciones.innerHTML = 1
}
print2 = () =>{
    operaciones.innerHTML = 2
}
print3 = () =>{
    operaciones.innerHTML = 3
}
printSuma = () =>{
    operaciones.innerHTML = `+`
}

btn1.addEventListener(`click`,print1)
btn2.addEventListener(`click`,print2)
btn3.addEventListener(`click`,print3)
btnSum.addEventListener(`click`,printSuma)