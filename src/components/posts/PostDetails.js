const PostDetails = ({selectedPost, onCommentsClick}) => {
    return (
        <div>
            <h3>{selectedPost.id} - {selectedPost.title}</h3>
            <h3>{selectedPost.body}</h3>
            <button onClick={() => onCommentsClick(selectedPost.id)}>Show comments</button>
        </div>
    );
};

export default PostDetails;
