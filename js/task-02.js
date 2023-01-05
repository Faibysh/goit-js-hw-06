const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");

for (let ingredient of ingredients)
{
 let itemList = document.createElement("li");
 itemList.textContent = ingredient;
 ingredientsList.append(itemList);
}