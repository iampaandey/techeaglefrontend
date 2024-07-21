import { FaHeart, FaComment } from 'react-icons/fa';

const BlogCard = ({ username, timestamp, title, content, description, style }) => {
  const convertToIST = (utcDate) => {
    return new Date(utcDate).toLocaleString('en-GB', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Use 24-hour time
    });
  };

  const istDateString = convertToIST(timestamp);
  console.log(timestamp,istDateString)

  return (
    <div
      style={style}
      className="max-w-md mx-auto bg-white border-2 border-blue-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4"
    >
      <div className="md:flex">
        <div className="p-8">
          <div className="tracking-wide text-sm text-indigo-500 font-semibold">
            {username}
          </div>
          <div className="mt-1 mb-1">
            <span className="text-gray-600 text-sm">{istDateString}</span>
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
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <FaComment className="mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
