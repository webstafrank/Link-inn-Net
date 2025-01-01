// frontend/src/components/UserProfile.js
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('/api/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setProfile(data));
    }, []);

    if (!profile) return <p>Loading...</p>;

    return (
        <div>
            <h1>{profile.user.name}'s Profile</h1>
            <h2>Your Posts</h2>
            <ul>
                {profile.posts.map((post) => (
                    <li key={post._id}>
                        <p>{post.content}</p>
                        <p>Likes: {post.likes.length}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfile;

