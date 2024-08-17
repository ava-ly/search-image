import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID eSvuNiy9QwXoT6FHFCypcIkLnHcmP2VT0PHP_dVpCrQ'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;