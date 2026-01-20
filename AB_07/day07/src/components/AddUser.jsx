import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../Api/usersApi";

const AddUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => mutation.mutate({ name: "New User" })}
        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
                   hover:bg-blue-700 active:scale-95 transition"
      >
        {mutation.isLoading ? "Adding..." : "Add User"}
      </button>
    </div>
  );
};

export default AddUser;
