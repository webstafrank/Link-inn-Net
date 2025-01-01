// frontend/src/pages/CommunityPage.js
import React, { useEffect, useState } from 'react';

const CommunityPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch posts');
                return res.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 font-bold">{error}</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Community Hangout</h1>
            <div className="space-y-6">
                {posts.map((post) => (
                    <div
                        key={post._id}
                        className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            {post.user.avatar ? (
                                <img
                                    src={post.user.avatar}
                                    alt={`${post.user.name}'s avatar`}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                            ) : (
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                            )}
                            <div>
                                <p className="text-lg font-semibold text-blue-700">{post.user.name}</p>
                                <p className="text-sm text-gray-500">Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityPage;

