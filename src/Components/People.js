
function People(props) {
    let { people, setPeople } = props
    let list = ""
    let total = 0
    if (people !== undefined && people !== "") {
        const handleDelete = (e) => {
            setPeople(people.filter(el => el !== e.target.innerHTML))
            
        }
        list = people.map((el, index) => {
            total++
            return <li key={index} onClick={handleDelete}>{el}</li>
        })
    }
    return (
        <>
            <ol>
                {total > 0 ? <span>Tienes {total} tarea/s por hacer</span> : ""}
                {list.length > 0 ? list : <h2>Estas libre 🐱 de tareas</h2>}
            </ol>
        </>
    )
}

export default People