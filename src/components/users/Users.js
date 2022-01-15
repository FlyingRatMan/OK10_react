const Users = ({users}) => {
    return <div>
        {users.map(user => <div key={user.id}>
            <h2>{user.name} - {user.username} - {user.email}</h2>
        </div>)}
    </div>
}

export default Users;