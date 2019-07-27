
    let todos = ["Write To Do List"];

window.setTimeout(function() {
    

  let input = prompt("What would you like to do?");

  while(input !== "quit"){
    //handle input
    if(input === "list") {
       listTodos();
    } else if (input === "new") {
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
     //ask again for new input
    input = prompt("What would you like to do?");
  }
console.log("OK, YOU QUIT THE APP");



function listTodos(){console.log("*****")
todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
});
console.log("*****")      
}

function addTodo(){//ask for new todo
    let newTodo = prompt("Enter new todo");
    //add todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){//ask for index of todo to be deleted
    let index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index,1);
    console.log("Deleted Todo");
}



}, 1000);
