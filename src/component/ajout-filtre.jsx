import { Filtre } from "./filtre"
import { Add } from "./addBar"

export function AjoutFiltre({onClick, todos, onChange, setTaille}){
    return <div className="ajout-filtre">
        <Add onClick={onClick} todos={todos} setTaille={setTaille}/>
        <Filtre onChange={onChange}/>
    </div>
}