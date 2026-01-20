import useAuth from "../hooks/useAuth";

const LoginStatus = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div className="mb-6 rounded-lg border p-5 shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-2">
        🔐 Authentication (useAuth Hook)
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        This section uses a <b>custom hook (useAuth)</b> to manage login state.
      </p>

      {isAuthenticated ? (
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-medium">
            Logged in as: <b>{user.name}</b>
          </p>
          <button
            onClick={logout}
            className="rounded bg-red-500 px-4 py-1 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => login("Demo User")}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginStatus;
