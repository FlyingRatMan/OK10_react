const Albums = ({albums, onPhotosClick}) => {
    return (
        <div>
            {albums.map(album => <div key={album.id}>
                <h2>{album.id} - {album.title}</h2>
                <button onClick={() => onPhotosClick(album.id)}>Show photos</button>
            </div>)}
        </div>
    );
};

export default Albums;
