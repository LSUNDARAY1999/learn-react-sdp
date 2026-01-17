import useFetch from "../hooks/useFetch";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="card">
      <h2>👥 Users</h2>

      {loading && <p className="status loading">Loading users...</p>}
      {error && <p className="status error">{error}</p>}

      <ul>
        {data?.slice(0, 5).map((user) => (
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
