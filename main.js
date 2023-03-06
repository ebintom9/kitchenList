let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

// 2  Add kitchen items function
function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    // create DOM elements
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    document.getElementById("kitchen-items-list").appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();

    // Create trash Btn
    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);
}

//Delete item from kitchen list
function deleteKitchenItems(event){
    if(event.target.classList[0] === 'fas'){
        let item = event.target.parentElement;
        item.remove();
    }
}

// Add an event listener
addBtn.addEventListener('click', addKitchenItems);
kitchenItemsList.addEventListener('click',deleteKitchenItems);


