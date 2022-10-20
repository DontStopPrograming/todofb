/* eslint-disable no-sequences */
import './App.css';
import notes from './notes';
import {useEffect} from 'react'
function App() {
  
  useEffect(() => {
    conex()
  },[])
  
  const conex = async() => { 
    const url = await fetch('http://localhost:3000/api/notes')
    const dataJson = await url.json()
    console.log(dataJson)
    
  } 
  
    
  

  return (
    <>
      { !notes ? 'cargando...' : 
        notes.map((note, id) => {
          return <ul key = {id}>
              <li>
                id : {note.id}, 
                title: {note.title},
                completed: {note.completed}
                
              </li>
            </ul>
        }
          
        )}
    </>
  );
}

export default App;
