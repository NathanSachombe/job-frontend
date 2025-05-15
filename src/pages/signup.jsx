import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });

  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Optionally reset the form here
    }, 2000);
  };

  return (
    <form
      className={`row g-3 needs-validation ${validated ? "was-validated" : ""}`}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="col-md-4">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="inputGroupPrepend"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          required
          value={formData.city}
          onChange={handleChange}
        />
        <div className="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <select
          className="form-select"
          id="state"
          required
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Choose...</option>
          <option>California</option>
          <option>Texas</option>
          <option>New York</option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="zip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          id="zip"
          required
          value={formData.zip}
          onChange={handleChange}
        />
        <div className="invalid-feedback">Please provide a valid zip.</div>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="agree"
            required
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agree">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {isSubmitting ? "Submitting..." : "Submit form"}
        </button>
      </div>
    </form>
  );
};

export default SignUp;
