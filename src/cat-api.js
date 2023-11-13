const BASE_URL = " https://api.thecatapi.com/";
const ENDPOINT = "v1/breeds";
const API_KEY = 'live_KiZjSdHE5Ga57g6XnnxAY4oZLzCTR6HOvCNSkSkvVMc2EtfuM9MhaxsVsm03BGyd';


export function fetchBreeds() {
  return fetch(`${BASE_URL}${ENDPOINT}?${API_KEY}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
export function createOptionsForIchCat(res) { 
    const cats = document.querySelector('.breed-select')
    res.map(item => { 
        const elements = document.createElement('option');
        elements.value = item.id;
        elements.textContent = item.name; 
              // console.log(elements);
        cats.insertAdjacentHTML('beforeend', `<option value="${item.id}">${item.name}</option>`)
    })
 }