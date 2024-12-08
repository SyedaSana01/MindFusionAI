import React from 'react';
import { Home, Brain, Activity, LineChart, Bell, Settings, BookOpen, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Analysis Hub', href: '/analysis', icon: Brain },
  { name: 'Mood Tracking', href: '/mood', icon: Activity },
  { name: 'Journal', href: '/journal', icon: BookOpen },
  { name: 'Therapy', href: '/therapy', icon: Heart },
  { name: 'Progress', href: '/progress', icon: LineChart },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r">
      <div className="flex items-center justify-center h-16 px-4 border-b">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm rounded-lg ${
                    location.pathname === item.href
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}