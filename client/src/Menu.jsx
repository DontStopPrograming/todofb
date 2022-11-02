import {NavLink} from 'react-router-dom'
import {useAuth} from './Auth'

function Menu() {
    const auth = useAuth()
    
    return (
        <>
            <nav>
                <ul>
                    {routes.map(route => {
                        if (route.public && auth.user) return null
                        if (route.private && !auth.user) return null
                        return (
                            <li key = {route.to}>
                            <NavLink 
                                style = {({isActive}) => ({
                                color: isActive ? 'red' : 'blue',
                                })}
                                to = {route.to} 
                            >
                                {route.text}
                            </NavLink>
                        </li>
                        )
                        })}
                </ul>
            </nav>
        </>
    )
}

const routes = []
    routes.push({
        to: '/',
        text: 'Home',
        private: false,
    })
    routes.push({
        to: '/blog',
        text: 'Blog',
        private: false,
    })
    routes.push({
        to: '/form',
        text: 'Form',
        private: false,
    })
    routes.push({
        to: '/login',
        text: 'Login',
        private: false,
        public: true,
    })
    routes.push({
        to: '/logout',
        text: 'Logout',
        private: true,
    })
    routes.push({
        to: '/profile',
        text: 'Profile',
        private: true,
    })
    
export {Menu}