import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";

export default function QueryDemo() {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <p className="status">Loading users...</p>;
  }

  if (isError) {
    return <p className="status error">{error.message}</p>;
  }

  return (
    <div className="card">
      <h2>React Query Demo</h2>
      <button onClick={refetch}>Refetch Data</button>

      <ul className="list">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
