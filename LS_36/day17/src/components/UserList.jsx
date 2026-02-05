import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading users...</p>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Users (Mock API)
      </h2>

      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 border rounded-lg hover:bg-gray-50 transition"
          >
            <p className="font-medium text-gray-700">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
