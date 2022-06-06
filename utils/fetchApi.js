import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'd2ac3d15c6msh50d17591ef2b24fp1eb393jsn6fcc0d859c08'
        }
    })
    return data;
}