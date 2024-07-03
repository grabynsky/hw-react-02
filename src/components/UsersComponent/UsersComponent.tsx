import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {IUser} from "../../models/IUser";
import {getPostsUser, getUsers} from "../../services/api-services";
import PostsComponent from '../PostsComponent/PostsComponent';
import { IPost } from '../../models/IPost';

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getUsers()
            .then(user => setUsers(user.data.users))
    }, []);

    const getPost = (id:number) => {
        getPostsUser(id)
            .then(response => {
                // console.log(response);
                setPosts(response);
            })
    }

    return (
        <>
            <div>
                {
                    users.map(({
                                   id,
                                   firstName,
                                   lastName,
                                   email,
                                   image,
                                   age
                               }) => <UserComponent
                            key={id}
                            id={id}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            image={image}
                            age={age}
                            getPost={getPost}
                        />
                    )}
                <div>
                    {
                        posts.length ? <PostsComponent posts={posts}/> : <div>User haven't posts</div>
                    }
                </div>
            </div>


        </>

    );
};

export default UsersComponent;