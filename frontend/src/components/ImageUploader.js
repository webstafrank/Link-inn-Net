// frontend/src/components/ImageUploader.js
import React, { useState } from 'react';

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        fetch('/api/posts/upload', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => setImage(data.url));
    };

    return (
        <div>
            <input type="file" onChange={uploadImage} />
            {image && <img src={image} alt="Uploaded" />}
        </div>
    );
};

export default ImageUploader;

