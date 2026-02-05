import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ------------------ Yup Validation Schema ------------------ */
const schema = yup.object({
  name: yup
    .string()
    // .required("Name is required")
    .min(3, "Minimum 3 characters"),

  email: yup
    .string()
    // .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    // .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

const FormValidationDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form Submitted Successfully ✅");
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-red-500">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Form Validation Demo
      </h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block font-medium">Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full border p-2 rounded mt-1"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border p-2 rounded mt-1"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full border p-2 rounded mt-1"
        />
        <p className="text-red-500 text-sm">
          {errors.password?.message}
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
);

};

export default FormValidationDemo;
