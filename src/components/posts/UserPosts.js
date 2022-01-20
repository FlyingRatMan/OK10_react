const UserPosts = ({posts}) => {
    return (
        <div>
            {posts.map(post => <div key={post.id}>
                <h3>{post.id} - {post.title}</h3>
                <h4>{post.body}</h4>
            </div>)}
        </div>
    );
};

export default UserPosts;
