import React, {FC, ReactNode} from 'react';
import { IPost } from '../../models/IPost';
// import PostComponent from '../PostComponent/PostComponent';


type IProps = { posts: IPost[] } & { children?: ReactNode }

const PostsComponent: FC<IProps> = ({posts}) => {

    console.log(posts);
    return (
        <div>
            {
                posts && posts.map((post) =>
                    <div>
                        {post.id}- {post.title} - {post.reactions.likes} - {post.reactions.dislikes}
                    </div>
                )
            }
        </div>
    );
};

export default PostsComponent;