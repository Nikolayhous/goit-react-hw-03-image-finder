import axios from 'axios';

const KEY_API = '22607866-39f004f28173cdb15c56bee0e';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchPicturesAPI = async (query, page = 1) => {
    try {
        const {
            data: { hits },
        } = await axios.get(
            `?q=cat&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`,
        );
        return hits;
    } catch (error) {
        console.log(error.message);
    }
};

export { searchPicturesAPI };

searchPicturesAPI();
