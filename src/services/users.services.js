import axios from "axios";

let url = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const userService = {
    getAll: () => url.get("/users").then(users => users.data),
    getById: (id) => url.get("/users/" + id).then(user => user.data),
};

export const postService = {
    getAll: () => url.get("/posts").then(posts => posts.data),
    getUserPosts: (id) => url.get("/users/" + id + "/posts").then(posts => posts.data),
};

export const commentService = {
    getPostComments: (id) => url.get("/posts/" + id + "/comments").then(comments => comments.data),
};

export const albumService = {
    getUserAlbums: (id) => url.get("/users/" + id + "/albums/").then(album => album.data),
};

export const photoService = {
    getAlbumPhotos: (id) => url.get("/albums/" + id + "/photos/").then(photos => photos.data),
};