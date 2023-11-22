// Area of triangle

// formula = A = 1/2 × b × h.

let display = document.querySelector('[data-display]')
let btn = document.querySelector('[data-btn]')
btn.addEventListener('click', time)

function time(){
    let input = document.querySelector('[data-Min]').value
    let area = eval (`${input} * 60`)
    display.value = area.toFixed(2)
}
// makes the input display read only
document.querySelector('[data-display]').readOnly = true