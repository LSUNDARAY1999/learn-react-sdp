import { useQuery } from "@tanstack/react-query";

/* API function */
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  /* Loading state */
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-500 animate-pulse">
          Loading users...
        </p>
      </div>
    );
  }

  /* Error state */
  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        User List
      </h2>

      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
