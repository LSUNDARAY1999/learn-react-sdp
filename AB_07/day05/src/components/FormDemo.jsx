import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* Validation Schema */
const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address (example@domain.com)"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Must be 18+")
    .required("Age is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),

  gender: yup.string().required("Select gender"),

  terms: yup.boolean().oneOf([true], "Accept terms")
});

function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Validated Data:", data);
    alert("Form submitted successfully");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">
          React Hook Form + Yup
        </h2>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Age */}
        <div>
          <input
            type="text"
            placeholder="Age"
            {...register("age")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.age?.message}</p>
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* Gender */}
        <div>
          <select
            {...register("gender")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register("terms")} />
          <span>Accept Terms & Conditions</span>
        </div>
        <p className="text-red-500 text-sm">{errors.terms?.message}</p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo;
