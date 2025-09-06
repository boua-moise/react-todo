import { Titre } from "./titre";
import { Compteur } from "./compteur";

export function Header({tache}){
    return<header>
        <Titre/>
        <Compteur tachesRestante={tache}/>
    </header>
}