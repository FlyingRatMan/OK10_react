import axios from "axios";

let url = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

const getUsers = () => {
    return url.get("/users");
};

const getUserId = (id) => {
    return url.get("/users/" + id);
};

const getPosts = (id) => {
    return url.get("/users/" + id + "/posts");
}

export { getUsers, getUserId, getPosts };