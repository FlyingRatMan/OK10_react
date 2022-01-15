import {useState, useEffect} from "react";

import "./App.css";
import Users from "./components/users/Users";
import Form from "./components/form/Form";
import {getUsers} from "./services/users.services";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data)
                setFilteredUsers(value.data)
            })
    }, [])

    const getFilter = (filter) => {
        let filtered = [...users];

        if (filter.name) {
           filtered = filtered.filter(user => user.name.includes(filter.name));
        }
        if (filter.username) {
            filtered = filtered.filter(user => user.username.includes(filter.username));
        }
        if (filter.email) {
            filtered = filtered.filter(user => user.email.includes(filter.email));
        }

        setFilteredUsers(filtered);
    }

    return (
        <div>
            <Form onSetFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;