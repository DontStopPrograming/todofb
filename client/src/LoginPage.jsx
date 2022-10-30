import {useState} from 'react'

function LoginPage() {
    const [username, setUsername] = useState('')

    const login = (e) => {
        e.preventDefault()
        console.log(username)
    }
    return (
    <div> 
        <h1> LOGIN PAGE</h1>
            <form onSubmit = {login}>
                <input type="text" value = {username} onChange = {e => setUsername(e.target.value)}/>
                <button type = 'submit'> Agregar </button>
            </form>


    </div>
  )
}
 export {LoginPage}