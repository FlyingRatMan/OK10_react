const Posts = ({posts, onDetailsClick}) => {
    return <div>
        {posts.map(post => <div key={post.id}>
            <h3>{post.id} - {post.title}</h3>
            <button onClick={() => onDetailsClick(post)}>Get details</button>
        </div>)}
    </div>
}

export default Posts;