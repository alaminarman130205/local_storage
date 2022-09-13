// local storage a 4 ta kaj kora jay 
// localStorage.setItem();
// localStorage.clear()
// localStorage.getItem();
// localStorage.removeItem();
// localStorage.setItem('name','alamin');
// const Name =  localStorage.getItem('name');
// localStorage.clear(Name);
// console.log(Name);
// localStorage.clear(name);


const getElement = (id) =>{
    const element = document.getElementById(id);
    return element;

}


const handleSubmit= () =>{
    const inputText = getElement('todo-text').value;
    const todoList = [
        {
            title:inputText,
            complited:false,
        },
    ];
    localStorage.setItem("TODOS",JSON.stringify(todoList));










    // localStorage.setItem('input',inputText);


    // const ul = document.getElementById('todo-list');

    // const li = document.createElement('li');
    // li.innerHTML = `
    
    // `
    // ul.appendChild(li);

    

    
}