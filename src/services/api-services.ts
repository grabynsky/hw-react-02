import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

const axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getUsers = (): Promise<AxiosResponse> => {
    return axiosInstance.get('/users')
}

export {
    getUsers,
}