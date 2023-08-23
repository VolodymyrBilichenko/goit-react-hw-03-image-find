import axios from "axios";

const MY_API_KEY = '37178508-b1640183771b73716106d46c3';
const BASE_URL = 'https://pixabay.com/api/';

export const getAllImages = async (searchQuery, page, perPage) => {
    const url = BASE_URL;
    const params = {
        key: MY_API_KEY,
        q: searchQuery,
        page: page,
        per_page: perPage,
    }


    const response = await axios(url, {params})
    return response.data
}