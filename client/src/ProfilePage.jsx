import {AuthRoute, useAuth} from './Auth'

function ProfilePage() {
    const auth = useAuth()
   
    return (
        <>
            <AuthRoute>
            <h1> PROFILE</h1>
            <p> Los datos del PROFILE son: {auth.user?.username}</p>
            </AuthRoute>
        </>
    )
}

export {ProfilePage}