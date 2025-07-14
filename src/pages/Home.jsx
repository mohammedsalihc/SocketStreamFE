import React, { useState } from 'react';
import {
  UsersIcon,
  MessageCircleIcon,
  EyeIcon,
  SendIcon,
  Trash2Icon,
  BanIcon,
} from 'lucide-react';

function Home() {
  const [activeTab, setActiveTab] = useState('users');

  let users = [
    { name: 'Salih', image: 'https://i.pravatar.cc/150?img=1', status: 'Online' },
    { name: 'Riya', image: 'https://i.pravatar.cc/150?img=22', status: 'Offline' },
    { name: 'Jin', image: 'https://i.pravatar.cc/150?img=50', status: 'Offline' },
    { name: 'JVD', image: 'https://i.pravatar.cc/150?img=44', status: 'Offline' },
    { name: 'EDX', image: 'https://i.pravatar.cc/150?img=38', status: 'Online' },
    { name: 'Aarav', image: 'https://i.pravatar.cc/150?img=5', status: 'Online' },
    { name: 'Tara', image: 'https://i.pravatar.cc/150?img=11', status: 'Offline' },
    { name: 'Yash', image: 'https://i.pravatar.cc/150?img=27', status: 'Online' },
    { name: 'Neha', image: 'https://i.pravatar.cc/150?img=8', status: 'Offline' },
    { name: 'Ishaan', image: 'https://i.pravatar.cc/150?img=19', status: 'Online' },
    { name: 'Kriti', image: 'https://i.pravatar.cc/150?img=29', status: 'Offline' },
    { name: 'Kabir', image: 'https://i.pravatar.cc/150?img=33', status: 'Online' },
    { name: 'Simran', image: 'https://i.pravatar.cc/150?img=41', status: 'Offline' },
    { name: 'Dev', image: 'https://i.pravatar.cc/150?img=16', status: 'Online' },
    { name: 'Pooja', image: 'https://i.pravatar.cc/150?img=20', status: 'Offline' },
    { name: 'Manav', image: 'https://i.pravatar.cc/150?img=35', status: 'Online' },
    { name: 'Sneha', image: 'https://i.pravatar.cc/150?img=7', status: 'Offline' },
    { name: 'Raghav', image: 'https://i.pravatar.cc/150?img=10', status: 'Online' },
    { name: 'Ananya', image: 'https://i.pravatar.cc/150?img=17', status: 'Offline' },
    { name: 'Zara', image: 'https://i.pravatar.cc/150?img=46', status: 'Online' },
  ];

  users.sort((a, b) => {
    if (a.status === 'Online' && b.status === 'Offline') return -1;
    if (a.status === 'Offline' && b.status === 'Online') return 1;
    return 0;
  });
  
  const chats = [
    {
      name: 'Ravi',
      image: 'https://i.pravatar.cc/150?img=23',
      lastMessage: 'Hey, how are you?',
      time: '10 min ago',
    },
    {
      name: 'Megha',
      image: 'https://i.pravatar.cc/150?img=15',
      lastMessage: 'Let’s catch up tomorrow!',
      time: '1 hour ago',
    },
    {
      name: 'Karan',
      image: 'https://i.pravatar.cc/150?img=4',
      lastMessage: 'Send me the file.',
      time: '5 min ago',
    },
    {
      name: 'Priya',
      image: 'https://i.pravatar.cc/150?img=12',
      lastMessage: 'Thanks! 😊',
      time: '30 min ago',
    },
    {
      name: 'Rahul',
      image: 'https://i.pravatar.cc/150?img=31',
      lastMessage: 'Can we talk later?',
      time: '2 hours ago',
    },
    {
      name: 'Sana',
      image: 'https://i.pravatar.cc/150?img=6',
      lastMessage: 'Just reached home.',
      time: '1 hour ago',
    },
    {
      name: 'Aditya',
      image: 'https://i.pravatar.cc/150?img=28',
      lastMessage: 'Zoom call at 3?',
      time: '15 min ago',
    },
    {
      name: 'Nina',
      image: 'https://i.pravatar.cc/150?img=13',
      lastMessage: 'LOL 😂',
      time: '3 min ago',
    }
  ];
  

  const handleViewProfile = (user) => {
    alert(`View profile of ${user.name}`);
  };

  const handleStartChat = (user) => {
    alert(`Start chat with ${user.name}`);
  };

  const handleDeleteChat = (chat) => {
    alert(`Deleted chat with ${chat.name}`);
  };

  const handleBlockUser = (chat) => {
    alert(`Blocked ${chat.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">SocketStream</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border text-gray-800 hover:bg-gray-100'
              }`}
            >
              <UsersIcon size={18} />
              Users
            </button>
            <button
              onClick={() => setActiveTab('chats')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'chats'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border text-gray-800 hover:bg-gray-100'
              }`}
            >
              <MessageCircleIcon size={18} />
              Chats
            </button>
          </div>
        </div>

        {/* Panel */}
        <div className="bg-white rounded-xl shadow-md p-6 min-h-[400px]">
          {activeTab === 'users' ? (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Platform Users</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users.map((user, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-gray-800 font-medium">{user.name}</h3>
                        <p
                          className={`text-sm ${
                            user.status === 'Online' ? 'text-green-500' : 'text-gray-400'
                          }`}
                        >
                          {user.status}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewProfile(user)}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                      >
                        <EyeIcon size={18} />
                      </button>
                      <button
                        onClick={() => handleStartChat(user)}
                        className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full text-blue-600"
                      >
                        <SendIcon size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Recent Chats</h2>
              <div className="space-y-4">
                {chats.map((chat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={chat.image}
                        alt={chat.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-gray-800 font-medium">{chat.name}</h3>
                        <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteChat(chat)}
                        className="p-2 bg-red-100 hover:bg-red-200 rounded-full text-red-600"
                      >
                        <Trash2Icon size={18} />
                      </button>
                      <button
                        onClick={() => handleBlockUser(chat)}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600"
                      >
                        <BanIcon size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
