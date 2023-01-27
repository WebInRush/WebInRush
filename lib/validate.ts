export function signin_validate(values: { email?: string; password?: string }) {
  const errors = {
    email: "",
    password: "",
  };
  // validation for email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character required.";
  }
  return errors;
}
export function signup_validate(values: {
  name?: string;
  email?: string;
  password?: string;
}) {
  const errors = {
    name: "",
    email: "",
    password: "",
  };
  // validation for name
  if (!values.name) {
    console.log(values.name);
    errors.name = "Required";
  }
  // validation for email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password =
      "Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character required.";
  }
  return errors;
}
