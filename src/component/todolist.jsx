import { Todo } from "./todo"

export function ToDoList({todosTrier, todos, onSetTodo, setTaille}){
    return <div className="todolist">
        
        {todosTrier.length !== 0 ? todosTrier.map(todo => <Todo 
            onSetTodo={onSetTodo} 
            todos={todos} 
            key={todos.indexOf(todo)} 
            val={todo}
            id={todos.indexOf(todo)} 
            setTaille={setTaille}
        />):
        "Acune Tâche ajouter"
    }
    </div>
}