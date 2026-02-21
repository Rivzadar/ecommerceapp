import { Star } from 'lucide-react';

export const Rating = ({ rating = 0, reviews = 0, size = 'md', interactive = false, onRate }) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizes[size]} ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:fill-yellow-300' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-2">
      {renderStars()}
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {rating.toFixed(1)}
        {reviews > 0 && ` (${reviews} reviews)`}
      </span>
    </div>
  );
};
