import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading)
    return <p className="text-center mt-10">Loading...</p>;

  if (error)
    return <p className="text-center text-red-500">Error occurred</p>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      {data.map((user) => (
        <div
          key={user.id}
          className="p-4 mb-3 bg-white shadow rounded"
        >
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
