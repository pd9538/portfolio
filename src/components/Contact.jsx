import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.subject) newErrors.subject = "Please enter a subject";
    if (!formData.message) newErrors.message = "Please enter your message";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <div className="container-fluid mt-5" id="contact">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>
            Contact
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row mb-3">
                  <div className="control-group col-sm-6 col-12 mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-danger">{errors.name}</p>}
                  </div>
                  <div className="control-group col-sm-6 col-12 mb-3">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                  </div>
                </div>
                <div className="control-group mb-3">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="text-danger">{errors.subject}</p>}
                </div>
                <div className="control-group mb-3">
                  <textarea
                    className="form-control py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-danger">{errors.message}</p>}
                </div>
                <div>
                  <button className="btn btn-outline-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
