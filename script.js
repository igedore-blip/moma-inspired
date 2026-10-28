const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
const search = document.querySelector('#site-search');
const searchToggle = document.querySelector('#search-toggle');
searchToggle.addEventListener('click', () => {
  const open = search.hidden;
  search.hidden = !open;
  searchToggle.setAttribute('aria-expanded', String(open));
  if (open) document.querySelector('#search-term').focus();
});
const items = [
  { title: 'Art is for everyone', body: 'Explore exhibitions, collections, and ideas that spark curiosity.', colors: ['#a63423','#1c3948','#e1b35a'] },
  { title: 'A new perspective', body: 'Discover fresh ways to look at modern and contemporary art.', colors: ['#154c54','#b5583b','#d6bf88'] },
  { title: 'Make a connection', body: 'Find inspiration in the work of artists across generations.', colors: ['#5c3765','#dc8c2c','#3f6c5f'] }
];
let index = 0;
function render(direction) {
  index = (index + direction + items.length) % items.length;
  const item = items[index];
  document.querySelector('.feature-copy h3').textContent = item.title;
  document.querySelector('.feature-copy p:not(.eyebrow)').textContent = item.body;
  document.querySelectorAll('.feature-art span').forEach((el, i) => el.style.backgroundColor = item.colors[i]);
}
document.querySelector('#previous').addEventListener('click', () => render(-1));
document.querySelector('#next').addEventListener('click', () => render(1));
