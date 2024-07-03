import { IPost } from "./IPost";

export interface IPostResponse {

    posts: IPost[];
    skip: number;
    limit:number

}