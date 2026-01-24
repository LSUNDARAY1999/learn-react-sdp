import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">
          API Contract Design
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Data fetched using OpenAPI contract
        </p>

        {loading ? (
          <p className="text-gray-600">Loading users...</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="border rounded-lg p-3 hover:bg-gray-50"
              >
                <p className="font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500">
                  {user.email}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  )
}

export default App
