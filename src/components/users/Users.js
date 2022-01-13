const Users = ({users, onDetailsClick}) => {
    return <div>
        {users.map(user => <div key={user.id}>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => onDetailsClick(user)}>Get details</button>
        </div>)}
    </div>
}

export default Users;