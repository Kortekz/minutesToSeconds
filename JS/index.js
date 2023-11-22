// Area of triangle

// formula = A = 1/2 × b × h.

// declaring variables
let display = document.querySelector('[data-display]')
let btn = document.querySelector('[data-btn]')
btn.addEventListener('click', time)

// funtion to calulate and display minutes to seconds
function time(){
    let input = document.querySelector('[data-Min]').value
    let calc = eval (`${input} * 60`)
    display.value = calc.toFixed(2)
}
// makes the input display read only
document.querySelector('[data-display]').readOnly = true