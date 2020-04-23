import React from 'react';

const Posts = (props) => {
    let posts = props.posts.map((post) => {
        return (
            <Post
                key={post._id}
                post={post}
                deletePost={props.deletePost}
                updatePost={props.updatePost}
            />
        );
    });

    return (
        <div>
            {posts}
        </div>
    );
}

export default Posts;
