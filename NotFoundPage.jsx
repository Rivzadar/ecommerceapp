import { Link } from 'react-router-dom';
import { Button } from '../components';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
