import {useAuth} from './Auth'

function LogoutPage() {
    const auth = useAuth()

    const logout = (e) => {
        e.preventDefault()
        auth.logout()
    }

  return (
    <div>
        <h1> Logout Page </h1>
        <form onSubmit = {logout}>
            <label> Seguro que quieres salir? </label>
            
            <button type = 'submit'> SALIR </button>
        </form>
    </div>
  )
}

export {LogoutPage}