import {useNavigate, useParams} from 'react-router-dom'
import {blogdata} from './BlogData'

function BlogPost() {
    const navigate = useNavigate()
    const {slug} = useParams()
    const blogpost = blogdata.find(post => post.slug === slug)

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <>
            <h2>title: {blogpost.title}</h2>
            <button onClick = {returnToBlog}> Backing to Blog</button>
            <p>content: {blogpost.content}</p>
            <p>author: {blogpost.author}</p >
        </>
    )
}

export {BlogPost}