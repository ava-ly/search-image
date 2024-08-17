import 'bulma/css/bulma.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
    const [images, setImages ] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <section className='hero is-info'>
                <div className='hero-body'>
                    <p className='title'>G-spot</p>
                </div>
            </section>
        
            <div>
                <SearchBar onSubmit={handleSubmit} />
            </div>

            <div>
                <ImageList images={images} />
            </div>
                    
        </div>
    
    );
};

export default App;