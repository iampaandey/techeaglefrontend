// src/components/cards/BlogCard.jsx
import { useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import Comments from '../BlogSection/commentSection/Comments';


const BlogCard = ({ username, timestamp, title, content, description, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = (newComment) => {
    // Update this function to handle adding a new comment to the state or backend
    console.log('New comment:', newComment);
  };

  return (
    <>
    <div
      className="max-w-md mx-auto bg-white border-2 border-blue-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4"
    >
      <div className="md:flex">
        <div className="p-8">
          <div className="tracking-wide text-sm text-indigo-500 font-semibold">
            {username}
          </div>
          <div className="mt-1 mb-1">
            <span className="text-gray-600 text-sm">{new Date(timestamp).toLocaleString()}</span>
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </div>
          <div className="mt-2 text-gray-500">{content}</div>
          <div className="mt-2 text-gray-500">{description}</div>
          <div className="mt-4 flex items-center">
            <button className="flex items-center text-gray-500 hover:text-red-500 mr-4">
              <FaHeart className="mr-1" />
            </button>
            <button
              onClick={handleToggleComments}
              className="flex items-center text-gray-500 hover:text-blue-500"
            >
              <FaComment className="mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
     {showComments && (
      <Comments comments={comments} addComment={handleAddComment} />
    )}
    </>
  );
};

export default BlogCard;
