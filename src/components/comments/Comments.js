import {useState, useEffect} from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(result => result.json())
            .then(comments => setComments(comments))
    })

    return (
        <div>
            {comments.map(comment => <div key={comment.id}>
                <h3>{comment.email}</h3>
                <h4>{comment.name}</h4>
                <h4>{comment.body}</h4>
            </div>)}
        </div>
    );
}

export default Comments;