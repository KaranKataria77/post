import axios from 'axios';
import { BASE_URL } from '../services/URL';

export const api = async (method, apiUrl) => {
    var options = {
        method: method,
        url: BASE_URL+apiUrl
    }

    const response = await axios.request(options)
    return response
}