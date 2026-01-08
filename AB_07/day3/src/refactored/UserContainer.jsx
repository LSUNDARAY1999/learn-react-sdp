import UserDetails from "./UserDetails";

function UserContainer() {
  const userName = "Guguli";

  return (
    <div className="border border-green-300 rounded-lg p-4">
      <h3 className="font-semibold text-green-500">User Container</h3>
      <UserDetails name={userName} />
    </div>
  );
}

export default UserContainer;
