import React, {FC, ReactNode} from 'react';
import { IPost } from '../../models/IPost';
import PostComponent from "../PostComponent/PostComponent";
// import PostComponent from '../PostComponent/PostComponent';


type IProps = { posts: IPost[] } & { children?: ReactNode }

const PostsComponent: FC<IProps> = ({posts}) => {

    return (
        <div>
            {
                posts && posts.map((post) =>
                    <PostComponent
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        reactions={post.reactions}
                    />
                )
            }
        </div>
    );
};

export default PostsComponent;