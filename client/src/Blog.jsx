import {Link, Outlet} from 'react-router-dom'
import {blogdata} from './BlogData'

function Blog() {

    return (
    <>
        <Outlet />
        <h2> Blog Page </h2>
        <ul>
            {blogdata.map(post => (
                <BlogLink key = {post.slug} post = {post} />
            ))}
        </ul>
    </>
)
}

function BlogLink ({post}) {
    return (
        <>
        <li>
            <Link to = {`/blog/${post.slug}`}> {post.title} </Link>
        </li>
        </>
    )
}


export {Blog}