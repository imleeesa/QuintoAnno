let interfaceSetUp = false;

window.addEventListener("resize", checkWindowSize);
checkWindowSize();
loadCatImages();

function checkWindowSize() {
    let width = window.innerWidth;
    
    console.log(width);
    if(width < 600){
        console.log("Smartphone");
        setupSmartInterface(true); 
    }
    else if(width >= 601 && width < 900){
        console.log("Tablet");
        setupSmartInterface(true); 
    }else{
        console.log("Desktop");
        setupSmartInterface(false); 
    }
}
function setupSmartInterface(showToggle){
    const toggleButton = document.querySelector('.menu-toggle') || document.createElement('div');
    const navbar = document.querySelector('#navbar'); 
    if (!interfaceSetUp) { 
        toggleButton.classList.add('menu-toggle');
        toggleButton.innerHTML = '&#9776;';
        document.body.appendChild(toggleButton);
        navbar.style.display = 'flex';

        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('menu-open');
            navbar.style.display = 'flex';
        });
      
        let items = document.querySelectorAll('.nav-item'); 
        items.forEach(item => { 
            item.addEventListener('click', function () {
                document.body.classList.remove('menu-open');
            });
        });

        interfaceSetUp = true; 
    }
    navbar.style.display = showToggle ? 'none' : 'flex';
    toggleButton.style.display = showToggle ? 'block' : 'none';
}
// GATTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII, ricordati di attacare hotspot
function loadCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=2')
        .then(response => response.json())
        .then(data => {
          let catGrid = document.getElementById('cat-grid');
          if (!catGrid) {
            console.error('Elemento #cat-grid non trovato');
            return;
          }
          catGrid.innerHTML = '';

          for(let i = 0; i < 2; i++) {
            const catImage = document.createElement('img');
            catImage.src = data[i].url;
            catGrid.appendChild(catImage);
          }
        })
        .catch(error => {
          console.error('Errore nel recupero delle immagini dei gatti:', error);
        });
}