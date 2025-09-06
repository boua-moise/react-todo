import { calculeLength } from "../App";

export function Add({onClick, todos, setTaille}){
    return <div className="add-todo">
        <input type="text" placeholder="Ajoute ta tâche" />
        <input type="button" value="ADD" onClick={(e) => {
            console.log(todos);
            const tache = e.target.previousSibling.value
            
            if (tache) {
                onClick([...todos, {value: tache, status: false}])

                todos.push({value: tache, status: false})
                calculeLength(todos, setTaille)
                localStorage.setItem("todos", JSON.stringify(todos))
                
                e.target.previousSibling.value = ""
            } else {
                alert("champ vide")
            }
        }} />
    </div>
}