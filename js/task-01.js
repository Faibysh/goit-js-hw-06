const listCats = document.querySelector('#categories')
console.log('Number of categories', listCats.children.length);

const itemCats = document.querySelectorAll('.item');
for (const item of itemCats) {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
}