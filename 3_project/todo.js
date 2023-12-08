const array = [];

function get_value(){
    const element = document.querySelector('.js-input');
    let value = element.value;
    if(value === ''){
        return;
    }
    else{
        array.push(value);
    }
    element.value = '';
}

const list = [];
appear();
function get_value1(){
    const element = document.querySelector('.js-input1');
    let value = element.value;
    if(value === ''){
        return;
    }
    else{
        list.push(value);
    }
    appear();
    element.value = ''; 
}

function appear(){
    let todoHtml = '';
    for(let i = 0;i<list.length;i++){
        const Element = list[i];
        const HTML = `<p>${list[i]}</p>`
        todoHtml += HTML;
    }
    console.log(todoHtml);
    document.querySelector('.js-text').innerHTML = todoHtml;
}

// 3 part
const array2 = [{name: 'Zainul',date:'21-12-2023'}]
function get_value2(){
    const elementName = document.querySelector('.js-name');
    let name = elementName.value;
    console.log(elementName);
    const elementDate = document.querySelector('.js-date');
    let date = elementDate.value;
    const obj ={
        name: name,
        date: date,
    }
    if(name === ''){
        return;
    }
    else{
        array2.push(obj);
    }
    console.log(array2);
    console.log(name);
    console.log(date);
}
function appear1(){
    let todoHtml = '';
    for(let i = 0;i<array2.length;i++){
        const elementobject = array2[i];
        const name = elementobject.name;
        const date = elementobject.date;
        const HTML = `
        <div class="container">
        <div>${name}</div>
        <div>${date}</div>
        
        <button class="Delete" onclick="
        array2.splice(${i},1);
        appear1();">Delete</button>`;
        console.log(name);
        todoHtml += HTML;
    }
    document.querySelector('.js-text1').innerHTML = todoHtml;
}