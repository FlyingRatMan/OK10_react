import {useState, useEffect} from "react";

import {commentService, postService} from "../services/users.services";
import "./PostsPage.css";
import Posts from "../components/posts/Posts";
import PostDetails from "../components/posts/PostDetails";
import Comments from "../components/comments/Comments";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(posts => setPosts(posts))
    }, []);

    return (
        <div className="posts">
            <Posts posts={posts} onDetailsClick={(post) => {
                setSelectedPost(post);
                setComments([]);
            }}/>
            {selectedPost && <div>
                <PostDetails selectedPost={selectedPost}
                             onCommentsClick={(postId) => commentService.getPostComments(postId)
                                 .then(comments => setComments(comments))}
                />

                {!!comments.length && <Comments comments={comments}/>}
            </div>}
        </div>
    );
};

export default PostsPage;
