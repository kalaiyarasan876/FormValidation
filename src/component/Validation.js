export default function Validation(values) {
  const error = {};

  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const password_pattern =
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

  if (values.name === "") {
    error.name = "Name is required";
  }

  if (values.email === "") {
    error.email = "Email is required";

  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Did't Matching";
  }

  if (values.password === "") {
    error.password = "Password in required";
    
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password Didn't Matching";
  }

  return error;
}
