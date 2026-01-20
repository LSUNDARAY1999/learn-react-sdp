import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import "./index.css"; // optional styling

// 1️⃣ Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationForm = () => {
  // 2️⃣ useForm setup with yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // 3️⃣ On form submit
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset(); // reset form after submission
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" {...register("confirmPassword")} />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
