export const Input = ({
  placeholder = '',
  type = 'text',
  value,
  onChange,
  className = '',
  icon: Icon,
  ...props
}) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 ${Icon ? 'pl-10' : ''} border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
        {...props}
      />
    </div>
  );
};
