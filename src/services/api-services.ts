import axios, {AxiosResponse} from "axios";
import {IPostResponse} from "../models/IPostResponse";
import {IPost} from "../models/IPost";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getUsers = (): Promise<AxiosResponse> => {
    return axiosInstance.get('/users')
}

// const getPostsUser = async (id: number): Promise<AxiosResponse<IPostResponse>> => {
//     return await axiosInstance.get('/users/' + id + '/posts')
// }

const getPostsUser = async (id: number) :Promise<IPost[]>=> {
    let axiosResponse = await axiosInstance.get('/users/' + id + '/posts');
    let posts: IPost[] = axiosResponse.data.posts;
    return posts;

}

export {
    getUsers,
    getPostsUser
}