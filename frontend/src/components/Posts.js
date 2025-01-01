// frontend/src/components/Posts.js
import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Community Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <p>{post.content}</p>
                        <p>Likes: {post.likes.length}</p>
                        <button>Like</button>
                        <button>Comment</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;

