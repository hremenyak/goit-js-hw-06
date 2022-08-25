const listOfCategoriesRef = document.querySelector('#categories');

const listOfCategoriesItemsRef = listOfCategoriesRef.children;

console.log(`Number of categories: ${listOfCategoriesItemsRef.length}`);


const getCategoryName = (items) => {
    for (let i = 0; i < items.length; i += 1) {
        const categoryItem = items[i];
        console.log(`Category: ${categoryItem.firstElementChild.textContent}`);
        console.log(`Elements: ${categoryItem.children[1].children.length}`);
    }

    return;
};
getCategoryName(listOfCategoriesItemsRef);
