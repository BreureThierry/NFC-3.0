function goDiscord() {
  window.location.href = "https://discord.gg/J9tXtVM5bW";
}
// -------------- Menu mobile --------------//
const burgerButton = document.querySelector('.burger')
const navigation = document.querySelector('#menu_mobile')
const nav_mobile_links = document.querySelectorAll('.menu_mobile_item')

burgerButton.addEventListener('click', toggleNav)

nav_mobile_links.forEach(element => element.addEventListener('click', toggleNav));

function toggleNav() {
  burgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
  if (navigation.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
// -------------- F.A.Q --------------//
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collaps_active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// -------------- Sound feature --------------//

let soundButton = document.querySelector('.btn_footer'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})
// -------------- Secret --------------//
const container_pop = document.getElementById('popscrt_container')
const secretWord = ['bbr', 'daddy', 'dream', 'franco', 'greeny', 'guich', 'lili', 'matheo', 'micka', 'naughty', 'slumar', 'tusblux']; 
const timer = 4800;
let container = null
let input = '';

document.addEventListener('keydown', (event) => {
  // Récupérer la touche pressée
  const key = event.key.toLowerCase();
  // Ajouter la touche à l'entrée actuelle
  input += key;
  // Vérifier si l'entrée correspond à l'un des mots secrets
  switch (input) {
    case 'bbr':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'daddy':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'dream':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'franco':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'greeny':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'guich':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'lili':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'matheo':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'micka':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'naughty':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'slumar':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;

    case 'tusblux':
      container_pop.style.display = 'block';
      container = document.getElementById("popscrt");
      container.innerHTML = `<img src="img/popscrt/${input}.webp" alt="${input}">`
      input = '';
      setTimeout(() => {
        container_pop.style.display = 'none';
      }, timer);
      break;
              
                                                                                                                                          
    default:
      // Réinitialiser l'entrée si la séquence est incorrecte
      if (!secretWord.some(word => word.startsWith(input))) {
        input = key;
      }
      break;
  }
});