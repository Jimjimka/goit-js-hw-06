const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl =document.getElementById('ingredients');

const listItemEl=ingredients.map(el=>{ 
    const listItemEl=document.createElement('li')
    listItemEl.textContent=el
    listItemEl.classList.add('item')
    return listItemEl
    
  })
  listEl.append(...listItemEl)


