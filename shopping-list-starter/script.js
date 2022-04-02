let shoppingListItems = ["milk", "eggs", "bread"]
let listElement = document.getElementById("shopping-list-items");

shoppingListItems.forEach((item) => {
    console.log(item)
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
})


function addItem() {
    let item = document.getElementById("new-item-text");
    shoppingListItems.push(item.value);
    console.log(shoppingListItems);
    updateItems()
    item.value = "";
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

updateItems();


function clearList() {
    shoppingListItems = [];
    updateItems();
}


// function removeItem() {
//     let listElement = document.getElementById("shopping-list-items");
//     listElement.innerHTML = "";
//     shoppingListItems.forEach((item) => {
//         let itemElement = document.createElement("li");
//         itemElement.innerText = item;
//         listElement.appendChild(itemElement);
// });
// }

// function clearList() {
//     document.getElementById("shopping-list-items").innerHTML = "";
//     shoppingListItems = [];
// }

