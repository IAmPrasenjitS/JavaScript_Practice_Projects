// Set cross icons to every li
let listItems = document.getElementById('myUL').querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    let textNode = listItems[i].innerHTML;
    textNode = textNode + '<i class="fa fa-times" aria-hidden="true"></i>';
    listItems[i].innerHTML = textNode;
}
// Showing Data
document.getElementById('myUL').innerHTML = localStorage.getItem('task')
// Adding task
document.getElementById('addButton').addEventListener('click', ()=>{
    let task = document.getElementById('myInput').value;
    let listElement = document.createElement('li');
    listElement.innerHTML = task + '<i class="fa fa-times" aria-hidden="true"></i>';;
    document.getElementById('myUL').appendChild(listElement);
    document.getElementById('myInput').value = '';
    saveData();
});

// Complete Check Mark
document.getElementById('myUL').addEventListener('click',(event)=>{
    let getTarget = event.target.nodeName;
    if(getTarget == 'li' ||getTarget == 'LI'){
        if(event.target.className != 'checked'){
            event.target.className = 'checked';
        }else{
            event.target.removeAttribute('class');
        }     
    }
    saveData();
});

// Removing Element
document.getElementById('myUL').addEventListener('click',(event)=>{
    let getTargetElementToRemove = event.target.nodeName;
    if(getTargetElementToRemove == 'i' || getTargetElementToRemove == 'I'){
        event.target.parentNode.remove();
    }
    saveData();
});

let saveData = () => {
    let taskItems = document.getElementById('myUL').innerHTML;
    localStorage.setItem("task", taskItems);
}