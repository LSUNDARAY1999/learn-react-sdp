import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <p className="status loading">Loading users...</p>;
  }

  if (isError) {
    return <p className="status error">{error.message}</p>;
  }

  return (
    <div className="card">
      <div className="header">
        <h2>Users List</h2>
        <button onClick={refetch}>
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
