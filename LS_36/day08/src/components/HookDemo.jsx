import useFetch from "../hooks/useFetch";
import useAuth from "../hooks/useAuth";

const HookDemo = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { user, login, logout } = useAuth();

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">
        Custom Hooks Demo
      </h1>

      {/* Auth Section */}
      <div className="flex justify-center gap-4">
        {user ? (
          <>
            <p className="text-green-600">Welcome, {user.name}</p>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => login("Lucky")}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>

      {/* Fetch Section */}
      <div>
        {loading && <p>Loading users...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <ul className="list-disc pl-5">
            {data.slice(0, 5).map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HookDemo;
