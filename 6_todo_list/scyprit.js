// document.querySelector('.js-add-button').addEventListener('click',()=>{
//     const input = document.querySelector('.js-input').value;
//     let html = '';
//     if(input === ''){
//     console.log('write');
//     }
//     else{
//         html = `<li class="checked js-list">Task 1</li>`
//         document.querySelector('ul').innerHTML = html;
//         let li = document.querySelector('.js-list');
//         li.innerHTML = input;
//     }
// })
const input = document.querySelector('.js-input');
const listContainer = document.querySelector('ul');

document.querySelector('.js-add-button').addEventListener('click',()=>{
    if(input.value === ''){
        alert('Write some task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
})

listContainer.addEventListener('click',(element)=>{
    if(element.target.tagName === 'LI'){
        element.target.classList.toggle('checked');
        saveData();
    }
    else if(element.target.tagName === 'SPAN'){
        element.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
getData();