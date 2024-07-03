import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {IUser} from "../../models/IUser";
import {getPostsUser, getUsers} from "../../services/api-services";
import PostsComponent from '../PostsComponent/PostsComponent';
import { IPost } from '../../models/IPost';
import styles from './UsersComponent.module.css';

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
                setPosts(response);
            })
    }

    return (
        <div>
            <div>
                {
                    posts.length ? <PostsComponent posts={posts}/> : <div className={styles.notPost}>User haven't posts</div>
                }
            </div>

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


            </div>
        </div>
    );
};

export default UsersComponent;