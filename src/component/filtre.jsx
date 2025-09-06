export function Filtre({onChange}){
    return <div>
        <select onChange={(e) => {
            onChange(e.target.value)
        }}>
            <option value="toutes">Toutes</option>
            <option value="terminées">Terminées</option>
            <option value="actives">Actives</option>
        </select>
    </div>
}