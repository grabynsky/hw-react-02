import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

import styles from './UserComponent.module.css';

type UserComponentType<T> = T & { getPost: (id:number)=>void }

const UserComponent: FC<UserComponentType<IUser>> = ({
                                        id,
                                        firstName,
                                        lastName,
                                        email,
                                        age,
                                        image,
                                        getPost
                                  }) => {

    return (
        <div className={styles.wrapper}>
            <div>
                {id}- {lastName} {firstName} Age: {age}
            </div>
            <div>
                E-mail: {email}
            </div>

            <img src={image} className={styles.img} alt={lastName}/>

            <button
                className={styles.btnPost}
                onClick = {()=>{
                    getPost(id)
            }}>Posts</button>

        </div>
    );
};

export default UserComponent;