import React from 'react';
import { Home, Book, Trophy, Users, BarChart } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home },
  { name: 'Courses', icon: Book },
  { name: 'Achievements', icon: Trophy },
  { name: 'Community', icon: Users },
  { name: 'Progress', icon: BarChart },
];

function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between space-x-4 py-3">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={item.name}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;