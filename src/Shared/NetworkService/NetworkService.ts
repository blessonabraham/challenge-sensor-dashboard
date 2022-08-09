import axios from 'axios';
import { API_ENDPOINTS } from '../Constants/Constants';

export const getRequest = async (url: string, params?: any) => {
    const { data } = await axios.get(API_ENDPOINTS.ROOT + url, {
        params,
    });
    return data;
};

export const postRequest = async (url: string, body?: any, params?: any) => {
    const { data } = await axios.post(API_ENDPOINTS.ROOT + url, body, {
        params,
    });
    return data;
};

export const putRequest = async (url: string, body?: any, params?: any) => {
    const { data } = await axios.put(API_ENDPOINTS.ROOT + url, body, {
        params,
    });
    return data;
};
