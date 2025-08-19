export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}