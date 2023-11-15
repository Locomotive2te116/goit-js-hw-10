import { fetchBreeds, fetchCatByBreed } from "./js/cat-api.js";
import { createOptionsForIchCat, createMarkup } from "./js/template.js";
const selectBreed = document.querySelector('.breed-select')
const catCard = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const  errMes = document.querySelector('.error')




fetchBreeds()
    .then(res => {
        selectBreed.classList.remove('is-hidden')
        createOptionsForIchCat(res)
    }).catch(err => {
        console.log(err);
         errMes.classList.remove('is-hidden')
    })
    .finally(() => {
    loader.classList.add('is-hidden')
    });


selectBreed.addEventListener('click', () => {
   
    selectBreed.classList.toggle('up');

    if (!selectBreed.classList.contains('up')) { 
        loader.classList.remove('is-hidden');
        catCard.classList.add('is-hidden');
        errMes.classList.add('is-hidden');
        const breedId = selectBreed.value;
        fetchCatByBreed(breedId)
            .then(res => { 
                catCard.classList.remove('is-hidden');
                const card = createMarkup(res[0]);
                catCard.innerHTML = card;
                

            })
            .catch(err => { 
                console.log(err);
                errMes.classList.remove('is-hidden');
            })
            .finally(() => { 
                loader.classList.add('is-hidden')
            })

    }

})