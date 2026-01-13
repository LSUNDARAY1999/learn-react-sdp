// import { useEffect, useState } from "react";

// function ApiFetch() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//         API Users
//       </h2>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading...</p>
//       ) : (
//         <ul className="space-y-2">
//           {users.map(user => (
//             <li
//               key={user.id}
//               className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
//             >
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ApiFetch;
