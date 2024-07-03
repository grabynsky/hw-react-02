import React, { FC } from 'react';
import { IPost } from '../../models/IPost';
import styles from'./PostComponent.module.css'

const PostComponent: FC<IPost> = ({
                                      id,
                                      title,
                                      reactions
}) => {

    return (
        <>
            <div className={styles.post}>
                {id}- {title} - {reactions.likes} - {reactions.dislikes}
            </div>
        </>
    );
};

export default PostComponent;