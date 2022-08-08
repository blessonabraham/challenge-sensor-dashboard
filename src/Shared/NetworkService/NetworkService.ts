import axios from "axios";
import { API_ENDPOINTS } from "../Constants/Constants";

export const getRequest = async (url: string, params?: any) => {
    const { data } = await axios.get(API_ENDPOINTS.ROOT + url, {
        params
    });
    return data
}