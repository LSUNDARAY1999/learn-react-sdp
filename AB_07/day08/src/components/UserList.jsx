import useFetch from "../hooks/useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="rounded-lg border p-5 shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-2">
        👥 Users List (useFetch Hook)
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Data is fetched from an API using a reusable custom hook called
        <b> useFetch</b>.
      </p>

      {loading && (
        <p className="text-blue-500">
          ⏳ Fetching data from API...
        </p>
      )}

      {error && (
        <p className="text-red-500">
          ❌ Error: {error}
        </p>
      )}

      {data && (
        <ul className="space-y-2">
          {data.map((user) => (
            <li
              key={user.id}
              className="rounded bg-gray-100 px-3 py-2"
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
