import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-6 py-3 bg-emerald-600 text-white rounded-lg">
        Open Menu
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 w-48 rounded-lg bg-white shadow-lg p-2">
          <DropdownMenu.Item className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-red-600">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
