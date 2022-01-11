import {useState, useEffect} from "react";
// import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result => result.json())
            .then(posts => setPosts(posts))
    })

    return (
        <div className="postDiv">
            {posts.map(post => <div key={post.id}>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
            </div>)}
        </div>
    );
}

export default Posts;