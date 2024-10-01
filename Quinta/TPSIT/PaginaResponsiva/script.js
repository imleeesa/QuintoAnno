/*
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.createElement('div');
  toggleButton.classList.add('menu-toggle');
  toggleButton.innerHTML = '&#9776;';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });

  let items = document.querySelectorAll('.nav-item'); 
  items.forEach(item => { 
    item.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });

  fetchCatImages();
});


function fetchCatImages() {
  fetch('https://api.thecatapi.com/v1/images/search?limit=2')
    .then(response => response.json())
    .then(data => {
      let catGrid = document.getElementById('cat-grid');
      if (!catGrid) {
        console.error('Elemento #cat-grid non trovato');
        return;
      }
      catGrid.innerHTML = '';

      for(let i=0; i < 3; i++) {
        const catImage = document.createElement('img');
        catImage.src = data[i].url;
        catGrid.appendChild(catImage);
      }
    })
    .catch(error => {
      console.error('Errore nel recupero delle immagini dei gatti:', error);
    });
}
*/
