import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });

    return (
        <div className='container'>
            <section className='section'>
                <div className='columns is-mobile'>
                    <div className='column'>
                        {renderedImages}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ImageList;