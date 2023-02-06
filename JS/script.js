const num = document.getElementById('number');
const numInp = document.getElementById('card_number')
const name = document.getElementById('name')
const nameInp = document.getElementById('card_name')
const year = document.getElementById('year')
const yearInp = document.getElementById('card_year')
const month = document.getElementById('month')
const monthInp = document.getElementById('card_month')
const cvc = document.getElementById('cvc')
const cvcInp = document.getElementById('card_cvc')

const subBtn = document.getElementById('submit')
const completed = document.querySelector('.thank')
const form = document.querySelector("form")


var invalidChars = [
    "-",
    "=",
    "+",
    "e",
    "E",
    "",
];

nameInp.addEventListener('keyup', (e) => {
    name.innerHTML = e.target.value
})



numInp.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault()
    }
});

numInp.addEventListener('keyup', (e) => {
    num.innerHTML = e.target.value
})


cvcInp.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault()
    }
});

cvcInp.addEventListener('keyup', (e) => {
    cvc.innerHTML = e.target.value
})

monthInp.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault()
    }
});

monthInp.addEventListener('keyup', (e) => {
    month.innerHTML = e.target.value
})

yearInp.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault()
    }
});

yearInp.addEventListener('keyup', (e) => {
    year.innerHTML = e.target.value
})
//

subBtn.onsubmit = (e) => {
    e.preventDefault();

    completed.classList.remove('hidden')
    form.classList.add('hidden')
}