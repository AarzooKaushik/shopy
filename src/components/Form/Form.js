import classes from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_OBJECT = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Form = () => {
  const [formData, setFormData] = useState(DEFAULT_OBJECT);
  const [formErrors, setFormErrors] = useState(DEFAULT_OBJECT);
  const navigate = useNavigate();

  const handleFormData = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: "" });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.subject) {
      errors.subject = "Subject is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      navigate("/demo");

      setFormData(DEFAULT_OBJECT);
      setFormErrors(DEFAULT_OBJECT);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={formData?.name}
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleFormData}
          className={formErrors?.name ? classes.error : ""}
        />

        <input
          value={formData?.email}
          id="email"
          type="Email"
          placeholder="Email"
          onChange={handleFormData}
          className={formErrors?.email ? classes.error : ""}
        />

        <input
          value={formData?.subject}
          id="subject"
          type="text"
          placeholder="Subject"
          onChange={handleFormData}
          className={formErrors?.subject ? classes.error : ""}
        />

        <textarea
          value={formData?.message}
          id="message"
          placeholder="Message"
          onChange={handleFormData}
          className={formErrors?.message ? classes.error : ""}
        ></textarea>

        <p className={classes.errorMessage}>
          {Object.keys(formErrors).some((it) => formErrors?.[it])
            ? "Please check your inputs."
            : " "}
        </p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
