import React, { FC } from 'react';
import { IPost } from '../../models/IPost';

// @ts-ignore
const PostComponent: FC<IPost> = ({post}) => {
    const {
        id,
        title,
        likes,
        dislikes
    } = post;

    return (
        <>
            <div>
                {id}- {title} - {likes} - {dislikes}
            </div>
        </>
    );
};

export default PostComponent;