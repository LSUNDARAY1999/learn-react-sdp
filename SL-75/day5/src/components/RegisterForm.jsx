import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/registerSchema";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const password = watch("password") || "";

  const strength =
    password.length >= 8 ? "strong" : password.length >= 6 ? "medium" : "weak";

  const onSubmit = (data) => {
    console.log("FORM DATA 👉", data);
    alert("🎉 Registration Successful");
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>
        <p>Welcome! Please register below</p>

        <div className="field">
          <input placeholder=" " {...register("name")} />
          <label>Full Name</label>
          <span>{errors.name?.message}</span>
        </div>

        <div className="field">
          <input placeholder=" " {...register("email")} />
          <label>Email Address</label>
          <span>{errors.email?.message}</span>
        </div>

        <div className="field password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder=" "
            {...register("password")}
          />
          <label>Password</label>

          <button
            type="button"
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </button>

          <span>{errors.password?.message}</span>

          {password && (
            <div className={`strength ${strength}`}>
              Password strength: {strength}
            </div>
          )}
        </div>

        <div className="field">
          <input placeholder=" " {...register("confirmPassword")} />
          <label>Confirm Password</label>
          <span>{errors.confirmPassword?.message}</span>
        </div>

        <button disabled={!isValid}>Register</button>

        <small>
          Already have an account? <a href="#">Login</a>
        </small>
      </form>
    </div>
  );
};

export default RegisterForm;
