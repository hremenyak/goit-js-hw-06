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
  let arrayOfingredients = [];
  for (let i = 0; i < ingredients.length; i += 1){
    const ingredientItem = document.createElement('li');

ingredientItem.textContent = ingredients[i];

    ingredientItem.classList.add('item');

    arrayOfingredients.push(ingredientItem);
     
  }
 
  return ingredientsRef.append(...arrayOfingredients);
}
debugger;
createListOfIngredients(ingredients);