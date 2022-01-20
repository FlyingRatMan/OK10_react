const Photos = ({photos}) => {
    return (
        <div>
            {photos.map(photo => <div key={photo.id}>
                <h3>{photo.id} - {photo.title}</h3>
                <img src={photo.url} alt="photo" width="100px"/>
            </div>)}
        </div>
    );
};

export default Photos;
