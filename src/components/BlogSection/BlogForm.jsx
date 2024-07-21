import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [contentType, setContentType] = useState('text');
  const [content, setContent] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('contentType', contentType);
    formData.append('content', content);
    formData.append('description', description);

    // Handle form submission logic here
    console.log({ title, contentType, content, description });

  
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mb-4 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold mb-6">New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
          <select
            id="contentType"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          {contentType === 'text' && (
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          )}
          {(contentType === 'image' || contentType === 'video') && (
            <input
              type="file"
              id="content"
              onChange={(e) => setContent(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-md"
              accept={contentType === 'image' ? 'image/*' : 'video/*'}
              required
            />
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
