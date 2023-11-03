import axios, { AxiosError } from "axios";
import UserData from "../models/UserData";

const baseUrl = 'http://localhost:3500'
const userDataEndPoint = `${baseUrl}/userdata`

export const getUserData = async () => {
    let response
    try {
     response   = await axios.get(`${userDataEndPoint}`);
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
        }
    } finally{
        return response;
    }
    
}

export const updateUser = async (userdata: UserData) => {
    let response;
    try {
        response = await axios.put(`${userDataEndPoint}/${userdata.id}`, userdata);
        
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
        }
    } finally{
        return response;
    }
}