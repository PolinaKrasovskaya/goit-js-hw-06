const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  const ingredientsRef = document.querySelector('#ingredients');

  const elements = ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    itemRef.classList.add('item');
    console.log(itemRef);

    return itemRef;
  });

  console.log(elements);

  ingredientsRef.append(...elements);
