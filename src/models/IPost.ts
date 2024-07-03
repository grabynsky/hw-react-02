export interface IPost{
    id:number;
    title: string;
    reactions: {likes: number, dislikes: number};
}

