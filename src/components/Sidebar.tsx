import React from 'react';
import { LucideIcon, Home, Archive } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-bold mb-4">Note Taker</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Home className="mr-2" />
          <a href="#" className="hover:underline">Home</a>
        </li>
        <li className="flex items-center">
          <Archive className="mr-2" />
          <a href="#" className="hover:underline">Previous Notes</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
