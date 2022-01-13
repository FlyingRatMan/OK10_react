import "./App.css";
import {useState, useEffect} from "react";
import Users from "./components/users/Users";
import UserDetails from "./components/users/UserDetails";
import Posts from "./components/posts/Posts";
import {getUsers, getPosts} from "./services/users.services";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers()
            .then(value => setUsers(value.data))
    }, [])

    return (
        <div className="flex">
            <Users users={users} onDetailsClick={(user) => {
                setSelectedUser(user);
                setPosts([]);
            }}/>
            <div className="flex-in">
                <UserDetails selectedUser={selectedUser} onPostsClick={() => {
                    getPosts(selectedUser.id)
                        .then(posts => setPosts(posts.data))
                }}/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default App;