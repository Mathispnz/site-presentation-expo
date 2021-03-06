let exhibitions = [
    {
        "city": "Paris",
        "title": "Sally Mann, Mille et un passages",
        "shortDes": "Vous vous souvenez de ce portrait d’une jeune fille blonde, cigarette (au chocolat) à la main, au regard bien trop profond pour une gamine de 8 ans ? La photo, Candy Cigarette, – qui a peuplé bien des Skyblogs et autres Tumblr – est issue de la série At Twelve signée Sally Mann, artiste américaine et figure incontournable du monde de la photographie. Elle fait, jusqu’au 22 septembre, l’objet d’une importante rétrospective au Jeu de Paume, haut lieu de la discipline qui nous plonge dans son univers aussi glauque qu’hypnotisant.",
        "longDes": "",
        "image": "https://media.timeout.com/images/105489806/380/285/image.jpg",
        "type": "Photographie",
        "location": "Jeu de Paume, 1er arrondissement"
    },
    {
        "city": "Paris",
        "title": "Van Gogh, La nuit étoilée",
        "shortDes": "Atelier des lumières, saison 2. Après une giga-rétrospective croisées des œuvres de Gustav Klimt et Egon Schiele, voilà que l’établissement maousse nous ressert du cultissime avec un autre monstre sacré de l’art, qui mérite tout autant d’y braver la queue. Le grand – que dis-je – l’immense Vincent Van Gogh se retrouve sous le feu des (140) projecteurs (laser), pour une création à la fois sonore et visuelle.  Résultat ? La magie prend cette fois-ci un peu plus.",
        "longDes": "",
        "image": "https://media.timeout.com/images/105398151/380/285/image.jpg",
        "type": "Arts numériques",
        "location": "Atelier des lumières, Paris"
    },
    {
        "city": "Paris",
        "title": "Toutankhamon, le trésor du Pharaon",
        "shortDes": "Les trésors de Toutankhamon arrivent à Paris et offrent à La Villette l’une des plus grandes expositions de l’année. Plus de 150 pièces, dont la plupart voyagent pour la première fois en dehors de l’Égypte, pour suivre le voyage dans l’au-delà du plus célèbre des pharaons. Topographie du royaume des morts et intérieur de pyramide.",
        "longDes": "",
        "image": "https://media.timeout.com/images/105372863/380/285/image.jpg",
        "type": "Sculpture",
        "location": "Grande Halle de La Villette, Jaurès"
    }
]


let titles = exhibitions.map(item => {
    return `<div class="card mb-3 mt-3" style="max-width: 800px; margin: 0 auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src=${item.image} class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.shortDes}</p>
          <p class="card-text"><button onclick=changeIt() type="button" class="btn btn-primary">En savoir plus</button></p>
        </div>
      </div>
    </div>
  </div>`
})

document.querySelector('#dataLoad').innerHTML = titles.join();

console.log(exhibitions);

let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('cottage_obj.obj');
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  scale(2); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}