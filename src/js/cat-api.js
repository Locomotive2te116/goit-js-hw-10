const BASE_URL = " https://api.thecatapi.com/v1";
const ENDPOINT = "/breeds";
const API_KEY = 'live_KiZjSdHE5Ga57g6XnnxAY4oZLzCTR6HOvCNSkSkvVMc2EtfuM9MhaxsVsm03BGyd';
const ENDPOINT2 = '/images/search'

export function fetchBreeds() {
  return fetch(`${BASE_URL}${ENDPOINT}?${API_KEY}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) { 
  return fetch(`${BASE_URL}${ENDPOINT2}?api_key=${API_KEY}&breed_ids=${breedId}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

// export function createOptionsForIchCat(res) { 

//   const arrayOfOption = res.map(item => {
//     return `<option value="${item.id}">${item.name}</option>`;
//     // const elements = document.createElement('option');
//     // elements.value = item.id;
//     // elements.textContent = item.name; 
//     // console.log(elements);
        
//   })
//     selectBreed.insertAdjacentHTML('beforeend', arrayOfOption.join(''))
// }
 







