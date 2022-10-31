import {useState} from 'react'
import {useAuth} from './Auth'
import {Navigate} from 'react-router-dom'

function LoginPage() {
    const auth = useAuth()
    const [username, setUsername] = useState('')

    const login = (e) => {
        e.preventDefault()
        auth.login({username})
    }

    if(auth.user) {
        return <Navigate to = '/profile' />
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