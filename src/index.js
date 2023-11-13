import { fetchBreeds, createOptionsForIchCat } from "./cat-api.js";



fetchBreeds().then(res => { 
    createOptionsForIchCat(res)
}).catch(console.log);

