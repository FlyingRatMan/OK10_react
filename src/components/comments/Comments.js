const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <div key={comment.key}>
                <h2>{comment.id} - {comment.name}</h2>
                <h3>{comment.email}</h3>
                <h3>{comment.body}</h3>
            </div>)}
        </div>
    );
};

export default Comments;
