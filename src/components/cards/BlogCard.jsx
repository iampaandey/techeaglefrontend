import { FaHeart, FaComment } from 'react-icons/fa';

const BlogCard = ({ username, timestamp, title, image, location, video, description, style }) => {
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
      className="max-w-md mx-auto bg-whiteoverflow-hidden md:max-w-2xl my-4"
    >
      <div className="md:flex items-center justify-center ">
        <div className=" flex flex-col items-center justify-center  border-2 border-blue-900 rounded-xl shadow-md p-8">
          <div className="tracking-wide text-sm text-indigo-500 font-semibold">
            {username}
          </div>
          <div className="tracking-wide text-sm text-indigo-500 ">
            {location}
          </div>
          <div className="mt-1 mb-1">
            <span className="text-gray-600 text-sm">{istDateString}</span>
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </div>
          <div className="mt-2">
            <img className='w-64' src={image}  alt="image" />
          </div>
          <div className="mt-2 text-gray-500">{description}</div>
          <div className="mt-2">
            <video controls>
              <source src={video} type='video/mp4' />
            </video>
          </div>
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
