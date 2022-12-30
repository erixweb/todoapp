import { useState } from "react"
import People from './People'
function Input() {
    const [action, setAction] = useState("")
    const [actions, setActions] = useState(["Aprender Next", "Hacer la comida"])
    const handleChange = e => {
        setAction(e.target.value)
    }
    const handleSubmit = e => {
        if (action.length > 0) {
            setActions([...actions, action])
        }
        setAction("")
        e.preventDefault()
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>ToDo List</h1>
            <input type="text" placeholder="Acción" value={action} onChange={handleChange}/>
            <input type="submit" value="Añadir" />
        </form>
        <People people={actions} setPeople={setActions} />
        </>
    )
}
export default Input