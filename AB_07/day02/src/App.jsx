import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading users...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Users List
      </h2>

      <ul className="max-w-3xl mx-auto space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <p className="font-semibold text-gray-700">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
