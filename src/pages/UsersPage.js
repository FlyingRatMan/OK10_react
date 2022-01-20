import {useEffect, useState} from "react";

import Users from "../components/users/Users";
import "./UsersPage.css";
import UserDetails from "../components/users/UserDetails";
import {userService, albumService, photoService, postService} from "../services/users.services";
import Albums from "../components/albums/Albums";
import Photos from "../components/photos/Photos";
import UserPosts from "../components/posts/UserPosts";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users))
    }, []);


    return (
        <div className="users">
            <Users users={users} onDetailsClick={(user) => {
                setSelectedUser(user);
                setAlbums([]);
                setPosts([]);
            }}
            onAlbumClick={(userId) => {
                setPhotos([]);
                albumService.getUserAlbums(userId).then(albums => setAlbums(albums))
            }}/>

            {(selectedUser && !albums.length) && <div>
                <UserDetails selectedUser={selectedUser}
                             onPostsClick={(selectedUserId) => postService.getUserPosts(selectedUserId).then(posts => setPosts(posts))}
                />
                {!!posts.length && <UserPosts posts={posts}/>}
            </div>}

            {!!albums.length && <div>
                <Albums albums={albums} onPhotosClick={(albumId) => photoService.getAlbumPhotos(albumId).then(photos => setPhotos(photos))}/>
                <Photos photos={photos}/>
            </div>}
        </div>
    );
};

export default UsersPage;
