import { Menu } from "@headlessui/react";

const MenuDemo = () => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="bg-green-600 text-white px-4 py-2 rounded">
        Options
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-40 bg-white border rounded shadow">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`block w-full text-left px-4 py-2 ${
                active ? "bg-gray-100" : ""
              }`}
            >
              Profile
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              className={`block w-full text-left px-4 py-2 ${
                active ? "bg-gray-100" : ""
              }`}
            >
              Settings
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default MenuDemo;
