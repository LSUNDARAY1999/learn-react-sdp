import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("notification", (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => socket.off("notification");
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Real-time Notifications
      </h2>

      <ul className="space-y-3">
        {notifications.map((n, i) => (
          <li
            key={i}
            className="border p-3 rounded-lg bg-gray-50"
          >
            <p>{n.message}</p>
            <span className="text-sm text-gray-400">
              {n.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
