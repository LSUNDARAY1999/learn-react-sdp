function UserDetails({ name }) {
  return (
    <div className="border border-green-200 rounded-lg p-4 mt-3 bg-green-50">
      <h4 className="font-medium text-green-700">User Details</h4>
      <p className="text-gray-700">User Name: {name}</p>
    </div>
  );
}

export default UserDetails;
