const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');


const createListOfIngredients = (ingredients) => {
  for (let i = 0; i < ingredients.length; i += 1){
    const ingredientItem = document.createElement('li');

ingredientItem.textContent = ingredients[i];

ingredientItem.classList.add('item');

ingredientsRef.append(ingredientItem);
    
  }
  return;
}

createListOfIngredients(ingredients);