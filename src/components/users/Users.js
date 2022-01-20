const Users = ({users, onDetailsClick, onAlbumClick}) => {
    return <div>
        {users.map(user => <div key={user.id}>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => onDetailsClick(user)}>Show details</button>
            <button onClick={() => onAlbumClick(user.id)}>Show albums</button>
        </div>)}
    </div>
}

export default Users;