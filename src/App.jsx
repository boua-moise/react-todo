import { useState } from 'react'
import { Header } from './component/header'
import { AjoutFiltre } from './component/ajout-filtre'
import { ToDoList } from './component/todolist'
import './App.css'

function App() {

  const [TODO, setTodo] = useState(JSON.parse(localStorage.getItem("todos")))

  const [search, setSearch] = useState("")

  const [taille, setTaille] = useState(TODO.filter(item => !item.status).length)
  

  const listeTrie = TODO.filter(todo => {
    if (search.includes("terminées") && !todo.status) {
      return false
    }
    
    if (search.includes("actives") && todo.status) {
      return false
    }

    return true
  })
  


  return (
    <>
      <Header tache={taille}/>
      <AjoutFiltre onClick={setTodo} onChange={setSearch} todos={TODO} setTaille={setTaille}/>
      <ToDoList 
        todosTrier={listeTrie} 
        todos={TODO}  
        onSetTodo={setTodo} 
        setTaille={setTaille}
      />
    </>
  )
}

export function calculeLength(TODO, setTaille){
    const val = TODO.filter(item => {
      if (item.status) {
        return false
      }
      return true
    })

  setTaille(val.length)
}

export default App
