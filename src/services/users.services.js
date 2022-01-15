import axios from "axios";

let url = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

const getUsers = () => {
    return url.get("/users");
};

export { getUsers };