import {useNavigate, useParams} from 'react-router-dom'
import {blogdata} from './BlogData'
import {useAuth} from './Auth'

function BlogPost() {
    
    const navigate = useNavigate()
    const {slug} = useParams()
    
    const auth = useAuth()
    
    const blogpost = blogdata.find(post => post.slug === slug)
    
    const userDelete = () => (
        auth.user?.isAdmin || blogpost.author === auth.user?.username
      )
    
    const returnToBlog = () => (
        navigate('/blog')
    )
    
    return (
        <>
            <h2>title: {blogpost.title}</h2>
            <button onClick = {returnToBlog}> Backing to Blog</button>
            <p>content: {blogpost.content}</p>
            <p>author: {blogpost.author}</p >

            {auth.user?.isAdmin && (
                <button onClick = {userDelete}> Eliminar blogpost</button>
            )}
        </>
    )
}

export {BlogPost}