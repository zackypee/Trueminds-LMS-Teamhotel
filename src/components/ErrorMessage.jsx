const ErrorMessage = ({ message, className}) => {
  if (!message) return null;

  return (
    <p className={`text-red-500 text-xs mt-1 ${className}`}>
      {message}
    </p>
  );
};

export default ErrorMessage;