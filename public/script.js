const show = document.querySelector('.reserve-div')
const press = document.querySelector('.button-res')


press.addEventListener('click', function () {
    show.classList.toggle('shown')
});


const filter = document.querySelector('.filt-div')
const druk = document.querySelector('.button-filt')

druk.addEventListener('click', function () {
    filter.classList.toggle('shown')
});