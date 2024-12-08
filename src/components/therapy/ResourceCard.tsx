import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceLink {
  name: string;
  url: string;
}

interface ResourceCardProps {
  title: string;
  description: string;
  links: ResourceLink[];
  category: 'therapy' | 'emergency' | 'education';
}

export default function ResourceCard({ title, description, links, category }: ResourceCardProps) {
  const getCategoryStyles = () => {
    switch (category) {
      case 'therapy':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'emergency':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'education':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getCategoryStyles()}`}>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}