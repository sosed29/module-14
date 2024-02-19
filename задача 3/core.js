const value = document.querySelector('input').value;
const btnNode = document.querySelector('button');
const resultNode = document.querySelector('.result');

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest ();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

function displayResult(apiData) {
    let images = ''; 
    apiData.forEach(item => {
      const imagesBlock = `
        <div class="images">
          <img
            src="${item.url}
          />
          <p>${item.title}</p>
        </div>
      `;
      images = images + imagesBlock;
    });    
    resultNode.innerHTML = images;
};
  
  btnNode.addEventListener ('click', () => { 
    if (value < 1 && value > 10) {
        resultNode.innerHTML = `<p>Число вне диапозона от 1 до 10</p>`;  
    } else {
        url = `https://jsonplaceholder.typicode.com/photos?_limit=5=${value}`;
    }
    useRequest (url, displayResult)
});