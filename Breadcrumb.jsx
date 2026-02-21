import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
