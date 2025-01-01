// frontend/src/components/MarkdownEditor.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');

    return (
        <div>
            <textarea
                className="w-full h-40 p-2 border"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <h3>Preview:</h3>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

