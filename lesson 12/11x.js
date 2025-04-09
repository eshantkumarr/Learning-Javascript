{
     window.todoListArray3 = JSON.parse(localStorage.getItem('todoListArray3')) || [];
    rendertodolist3();
    
    function rendertodolist3() {
        let todoHTML='';
        todoListArray3.forEach((value, index) => {
            // const todoItem = todoListArray3[index];
            const html = 
            `
                <div class= "todoItem-name">${value.name}</div>
                 <div class= "todoItem-date">${value.date}</div>
                    <button 
                    class="delete-button"
                    onclick=
                        "todoListArray3.splice(${index}, 1); rendertodolist3();
                        localStorage.setItem('todoListArray3', JSON.stringify(todoListArray3));
                        "
                    >Delete</button>
                    
                
             `;
            todoHTML += html;
        })
        // for (let i = 0; i < todoListArray3.length; i++) {
        //     const todoItem = todoListArray3[i];
        //     const html = 
        //     `
        //         <div class= "todoItem-name">${todoItem.name}</div>
        //          <div class= "todoItem-date">${todoItem.date}</div>
        //             <button 
        //             class="delete-button"
        //             onclick=
        //                 "todoListArray3.splice(${i}, 1); rendertodolist3();
        //                 localStorage.setItem('todoListArray3', JSON.stringify(todoListArray3));
        //                 "
        //             >Delete</button>
                    
                
        //      `;
        //     todoHTML += html;
        // }
        document.querySelector('.js-todo-viewer-3').innerHTML = todoHTML;
        
    }
    function handleTodoList3() {
        const name = document.querySelector('.todoinput-3');
        const date = document.querySelector('.js-date');
        const todoInput3 ={
            name :name.value,
            date : date.value
        };
        
        todoListArray3.push(todoInput3);  
        localStorage.setItem('todoListArray3', JSON.stringify(todoListArray3));
        // console.log(todoListArray3);

        
        
        name.value   ='';
        date.value  = '';
        rendertodolist3();
    }
}