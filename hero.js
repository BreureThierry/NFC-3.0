// ______________ HERO ______________//
const banner_hero_img = document.getElementById('banner_hero_img');
const imageSources = [
  'img/hero/1.webp',
  'img/hero/2.webp',
  'img/hero/3.webp',
  'img/hero/4.webp',
  'img/hero/5.webp',
  'img/hero/6.webp',
  'img/hero/7.webp',
  'img/hero/8.webp',
  'img/hero/9.webp',
  'img/hero/10.webp',
  'img/hero/11.webp',
  'img/hero/12.webp',
  'img/hero/13.webp',
  'img/hero/14.webp',
];

let currentIndex = 0;
function changeImage() {
  banner_hero_img.src = imageSources[currentIndex];
  currentIndex = (currentIndex + 1) % imageSources.length;
}

setInterval(changeImage, 3000);