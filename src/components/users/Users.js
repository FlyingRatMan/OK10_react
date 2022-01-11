import {useState, useEffect} from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(users => setUsers(users))
    })

    return (
        <div className="userDiv">
            {users.map(user => <div key={user.id}>
                <h2>{user.name} {user.username}</h2>
                <h3>{user.email} {user.phone}</h3>
                <h3>{user.address.street} {user.address.suite} {user.address.city}</h3>
                <h3>{user.website}</h3>
                <h3>{user.company.name}</h3>
            </div>)}
        </div>
    );
}

export default Users;