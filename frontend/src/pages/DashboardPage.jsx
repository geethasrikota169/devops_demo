import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role') || 'user';

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </h1>
      
      {/* Show admin-only controls */}
      {role === "admin" && (
        <div className="mb-6 p-4 bg-blue-50 rounded">
          <h2 className="text-xl font-semibold mb-2">Admin Controls</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Manage Users
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Analytics
          </button>
        </div>
      )}

      {/* Common user content */}
      <div className="p-4 bg-white rounded shadow">
        <p>Welcome, {role === "admin" ? "Admin" : "User"}!</p>
        <p className="mt-2">
          {role === "admin"
            ? "You have full access to the system."
            : "You can view basic content."}
        </p>
      </div>
      <button 
        onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          navigate('/');
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}