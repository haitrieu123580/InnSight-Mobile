import axios from "axios";
const BASE_URL = 'https://deploy-api-booking-production.up.railway.app/api/hotel'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export const getHotelById = async (data) => {
    const response = await axios.post(`${BASE_URL}/rooms`, JSON.stringify(data), config);
    return { Data: response?.data };
}
export const searchHotels = async (filter) => {
    try {
        const response = await axios.post(`${BASE_URL}/filter/search`, JSON.stringify(filter), config);
        return { Data: response?.data };
    } catch (error) {
        return { Error: error };
    }
};