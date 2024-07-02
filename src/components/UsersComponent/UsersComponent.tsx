import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api-services";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(user => setUsers(user.data.users))
    }, []);

    const postsHandler = (id:number) => {
        console.log(id)
    }

    return (
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
                                    postsHandler={postsHandler}
                                />
            )}
        </div>
    );
};

export default UsersComponent;