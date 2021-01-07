const adultsMinusBtn = document.querySelector('#adults-minus');
const adultsPlusBtn = document.querySelector('#adults-plus');
const kidsMinusBtn = document.querySelector('#kids-minus');
const kidsPlusBtn = document.querySelector('#kids-plus');
const arirvalDate = document.querySelector('#date-arrival');
const departureDate = document.querySelector('#date-departure');
const searchBtn = document.querySelector('.search-form__submit-btn');
let adlults = document.querySelector('#adults-input');
let kids = document.querySelector('#kids-input');
const refreshFunc = () => {
    arirvalDate.value = '';
    departureDate.value = '';
    adlults.value = 0;
    kids.value = 0; 
}

adultsMinusBtn.addEventListener('click', () => {
    event.preventDefault()
    adultsPlusBtn.classList.remove('input-btn-qty--disabled');
    if (adlults.value > 1) {
        adlults.value--;
    }
    else if (adlults.value > 0){
        adlults.value--
        adultsMinusBtn.classList.add('input-btn-qty--disabled');
    }
})
adultsPlusBtn.addEventListener('click', () => {
    event.preventDefault()
    adultsMinusBtn.classList.remove('input-btn-qty--disabled');
    if (adlults.value < 9) {
        adlults.value++;
    }
    else if (adlults.value < 10){
        adlults.value++
        adultsPlusBtn.classList.add('input-btn-qty--disabled');
    }
})
kidsMinusBtn.addEventListener('click', () => {
    event.preventDefault()
    kidsPlusBtn.classList.remove('input-btn-qty--disabled');
    if (kids.value > 1) {
        kids.value--;
    }
    else if (kids.value > 0){
        kids.value--
        kidsMinusBtn.classList.add('input-btn-qty--disabled');
    }
})
kidsPlusBtn.addEventListener('click', () => {
    event.preventDefault()
    kidsMinusBtn.classList.remove('input-btn-qty--disabled');
    if (kids.value < 9) {
        kids.value++;
    }
    else if (kids.value < 10){
        kids.value++
        kidsPlusBtn.classList.add('input-btn-qty--disabled');
    }
})
searchBtn.addEventListener('click', () => {
    event.preventDefault()
    if (arirvalDate.value == '' || departureDate.value == '') {
        alert('Chose arrival and departure date first')
    } else if (adlults.value == 0) {
        alert('Chose at least one adult person')
    } else {
        let dataObj = new Object;
        let requestStr = JSON.stringify(
        dataObj = {
            arrival: arirvalDate.value,
            departure: departureDate.value,
            adults: adlults.value,
            kids: kids.value
        });
        alert('The imitation of server request via JSON string is in browser console')
        console.log(requestStr); 
        refreshFunc();
    }      
})
