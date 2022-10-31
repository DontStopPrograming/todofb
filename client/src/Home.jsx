import {useState, useEffect} from 'react'

function Home() {
    const [notes, setNotes] = useState([])

    useEffect (() => {
        conex()
    }, [])
    
    const conex = async() => {
        const url = await fetch('http://localhost:3000/home/notes')
        const data = await url.json()
            setNotes(data)
            console.log(data)

      }


    return (
        <>
            <ul>
                { !notes ? '...charging' :
                    notes.map((note, id) => {
                        return <li key = {id}>
                            title : {note.title},
                            completed : {note.completed}
                        </li>
                    })
                }
            </ul>

            <h1> HOME</h1>
        </>
    )
}
export {Home}