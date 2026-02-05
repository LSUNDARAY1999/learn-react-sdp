import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Full name is required"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});
