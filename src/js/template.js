const selectBreed = document.querySelector('.breed-select')
export function createOptionsForIchCat(res) { 

  const arrayOfOption = res.map(item => {
    return `<option value="${item.id}">${item.name}</option>`;
         
  })
    selectBreed.insertAdjacentHTML('beforeend', arrayOfOption.join(''))
}

export function createMarkup(item) {
  return `
  <div class="cat-card">
    <img src="${item.url}" alt="${item.breeds[0].name}" class="cat-img" width="760" hight="660" />
  
  <p class="cat-name">${item.breeds[0].name}</p>
  <p class="cat-description">${item.breeds[0].description}</p>
  <p class="cat-temperament">${item.breeds[0].description}</p>
  </div>
  `;
}