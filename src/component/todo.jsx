import { useState } from "react"

import { calculeLength } from "../App"

export function Todo({onSetTodo, todos, val, id, setTaille}){
    const boxNoCheck = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#737373" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
    const boxCheck = <svg xmlns="http://www.w 3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ff5744" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5.457 7.457l-1.414-1.414L11 13.086l-2.793-2.793l-1.414 1.414L11 15.914z"/></svg>

    const [valeur, setValeur] = useState(val.value)

    return <div className="todo" id={id}>
        <div className="tache">
            <span className="change" id={id} onClick={e => {
                const index = parseInt(e.target.closest("span").id)

                const update = todos.map((todo, i) => i === index ? {...todo, status: !todo.status} : todo)

                onSetTodo(update)

                calculeLength(update, setTaille)

                localStorage.setItem("todos", JSON.stringify(update))
                
            }}>
                {val.status ? boxCheck : boxNoCheck}
            </span>
           <input 
                className={"text-todo " + val.status} 
                type="text" 
                value={valeur}
                onChange={(e) => setValeur(e.target.value)}
                onBlur={e => {
                    changeValue(parseInt(id), todos, valeur, onSetTodo, val.value)
                }}
            />
        </div>
        <span id={id} onClick={e => {
                const index = parseInt(e.target.closest("span").id)

                const update = todos.filter((_, i) => i !== index)

                onSetTodo(update)

                calculeLength(update, setTaille)

                localStorage.setItem("todos", JSON.stringify(update))

            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14"><path fill="#8e8e8e" fillRule="evenodd" d="M13.655 1.335a.7.7 0 0 0-.99-.99L7 6.01L1.335.345a.7.7 0 0 0-.99.99L6.01 7L.345 12.665a.7.7 0 0 0 .99.99L7 7.99l5.665 5.665a.7.7 0 1 0 .99-.99L7.99 7z" clipRule="evenodd" strokeWidth="0.5" stroke="currentColor"/></svg>
        </span>
    </div>
}

function changeValue(id, tab, valeur, onSetTodo, element){
    const update = tab.map((item, i) => i === id? {...item, value: valeur} : item)
    onSetTodo(update)
    localStorage.setItem("todos", JSON.stringify(update))
    console.log("valeur: ", valeur, "element: ", element);
    
    if (element !== valeur) {
        alert("Sauvegarder avec succès")
    }
}