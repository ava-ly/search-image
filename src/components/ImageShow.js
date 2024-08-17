function ImageShow({ image }) {
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image.urls.small} alt={image.alt_description} />
                </figure>
            </div>
        

            <div className="card-content">
                <div className="content">Description: {image.alt_description}</div>
            </div> 
        </div>
    )
};

export default ImageShow;