import { Search, X } from 'lucide-react';
import { Input } from './Input';

export const SearchBar = ({ value, onChange, onClear, placeholder = 'Search products...' }) => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        icon={Search}
        className="pr-10"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
