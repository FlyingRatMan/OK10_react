const UserDetails = ({selectedUser, onPostsClick}) => {
    return <div>
        <h2>{selectedUser.username}</h2>
        <h3>{selectedUser.email} {selectedUser.phone}</h3>
        <h3>{selectedUser.address.street} {selectedUser.address.suite} {selectedUser.address.city}</h3>
        <h3>{selectedUser.website}</h3>
        <h3>{selectedUser.company.name}</h3>
        <button onClick={() => onPostsClick(selectedUser.id)}>Show posts</button>
    </div>
}

export default UserDetails;