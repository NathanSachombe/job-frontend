import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";


const AddJob = ({ categories = [] }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    description: "",
  });

  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    }, 2000);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ backgroundColor: "grey", padding: "20px", borderRadius: "8px" }}
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="jobTitle">
          <Form.Label style={labelStyle}>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="jobTitle"
            required
            placeholder="Enter job title"
            value={formData.jobTitle}
            onChange={handleChange}
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="companyName">
          <Form.Label style={labelStyle}>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="companyName"
            required
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            style={inputStyle}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="location">
          <Form.Label style={labelStyle}>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            required
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="jobType">
          <Form.Label style={labelStyle}>Job Type</Form.Label>
          <Form.Control
            as="select"
            name="jobType"
            required
            value={formData.jobType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select job type</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Row>

           <Form.Group className="mb-3" controlId="description">
        <Form.Label style={labelStyle}>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          required
          placeholder="Enter job description"
          value={formData.description}
          onChange={handleChange}
          style={inputStyle}
        />
      </Form.Group>

      <Button
        variant="warning"
        type="submit"
        disabled={isSubmitting}
        style={{ marginBottom: "10px" }}
      >
        {isSubmitting ? "Submitting..." : "Add Job"}
      </Button>
    </Form>
  );
};

const labelStyle = {
  fontWeight: "bold",
  fontFamily: "Georgia",
  color: "white",
};

const inputStyle = {
  border: "solid",
};

export default AddJob;
