const BASE_URL = " https://api.thecatapi.com/v1";
const ENDPOINT = "/breeds";
const API_KEY = 'live_KiZjSdHE5Ga57g6XnnxAY4oZLzCTR6HOvCNSkSkvVMc2EtfuM9MhaxsVsm03BGyd';
const ENDPOINT2 = '/mages/search'

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






