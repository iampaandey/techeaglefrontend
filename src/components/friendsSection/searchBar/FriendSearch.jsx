import { useState, useEffect } from 'react';

const FriendSearch = ({ onAddFriend, friends, friendslist }) => {
  // Transform friends array to match mockUsers structure
  const mockUsers = friends.map(friend => ({
    id: friend._id,
    name: friend.username
  }));

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query === '') {
      setResults([]);
    } else {
      const filteredResults = mockUsers.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  const handleAddFriend = (friend) => {
    onAddFriend(friend);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for friends..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <ul className="mt-2">
        {results.map((user) => (
          <li
            key={user._id}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            {user.name}
            {friendslist.some(friend => friend.id === user.id) ? (
              <span className="text-gray-500">Friend</span>
            ) : (
              <button
                onClick={() => handleAddFriend(user)}
                className="bg-indigo-500 text-white p-1 rounded-md hover:bg-indigo-600"
              >
                Add Friend
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendSearch;
