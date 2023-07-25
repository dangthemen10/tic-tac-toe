import { useEffect, useState } from "react"

/**
 * Effect:
 * 
 * 1. Callback luôn được gọi lại khi component mounted
 * 2. Cleanup function luôn được gọi trước khi component unmounted
 * 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
 */

function StudyEffect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showBackToTop, setShowBackToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [timer, setTimer] = useState(180)

    const tabs = ['posts', 'comments', 'albums', 'photos']

    /**
     * 1. useEffect(Callback)
     * Gọi callback mỗi khi component re-render
     * Gọi callback sau khi component thêm element vào DOM
     */

    // useEffect(() => {
    //     document.title = title
    // })

    /** 
     * 2. useEffect(Callback, [])
     * Chỉ gọi callback 1 lần sau khi component mounted
     */

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(posts => { setPosts(posts) })
    // }, [])


    /** 
     * 3. useEffect(Callback, [deps])
     * Callback sẽ được gọi lại mỗi khi deps thay đổi
     */

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(posts => { setPosts(posts) })
    }, [type])


    /**
     * Listen DOM event: scroll
     */
    useEffect(() => {
        const handleShowBackToTop = () => {
            setShowBackToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleShowBackToTop)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleShowBackToTop)
        }
    }, [])

    const handleBackToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    /**
     * Listen DOM event: resize
     */
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    /**
     * Timers
     */
    useEffect(() => {
        const handleTimer = setInterval(() => {
            setTimer((prevState => prevState - 1))
        }, 1000)

        // Cleanup function
        return () => {
            clearInterval(handleTimer)
        }
    }, [])


    function PostsComponent({posts}) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td >{post.userId}</td>
                                <td >{post.title}</td>
                                <td >{post.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    function CommentsComponent({posts}) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td >{post.postId}</td>
                                <td >{post.email}</td>
                                <td >{post.name}</td>
                                <td >{post.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    function AlbumsComponent({posts}) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td >{post.userId}</td>
                                <td >{post.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    function AlbumsComponent({posts}) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td >{post.userId}</td>
                                <td >{post.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    function PhotosComponent({posts}) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>ThumbnailUrl</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td >{post.albumId}</td>
                                <td >{post.title}</td>
                                <td >{post.thumbnailUrl}</td>
                                <td >{post.url}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: '10px', width: '300px'}}
            />

            <p>With: {width}</p>
            <p>Timers: {timer}</p>

            <br/>

            {
                tabs.map(tab => {
                    return (
                        <button
                            key={tab}
                            style={tab === type ? {color: '#fff', backgroundColor: '#333', marginBottom: '10px'} : {marginBottom: '10px'}}
                            onClick={() => setType(tab)}
                        >
                            {tab}
                        </button>
                    )
                })
            }

            {type === 'posts' && <PostsComponent posts={posts}/>}
            {type === 'comments' && <CommentsComponent posts={posts}/>}
            {type === 'albums' && <AlbumsComponent posts={posts}/>}
            {type === 'photos' && <PhotosComponent posts={posts}/>}

            {showBackToTop && (
                <button onClick={handleBackToTop} style={{
                    position: 'fixed',
                    padding: '10px 10px',
                    fontSize: '20px',
                    bottom: '20px',
                    borderRadius: '40px',
                    right: '20px',
                    backgroundColor: '#0C9',
                    color: '#fff',
                    textAlign: 'center',
                }}>
                    Top
                </button>
            )}
        </div>
    )
}

export default function Hook () {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!toggle)} style={{ marginBottom: '10px'}}>Toggle</button>
            { toggle && 
                <StudyEffect />
            }
        </div>
    )
}