import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [courseOpen, setCourseOpen] = useState(false);

  const courses = ['BCA', 'MCA', 'BBA', 'B.Tech', 'Other'];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccess('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Student name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Enter a valid email address';
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.course) newErrors.course = 'Please select a course';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess('Registration successful! Welcome, ' + formData.name);
      setFormData({ name: '', email: '', phone: '', course: '' });
      setErrors({});
    }
  }

  return (
    <div className="page">
      <div className="registration-card">
        <h1>Student Registration</h1>
        <p className="subtitle">Your journey starts here</p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            aria-label="Student Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            aria-label="Email Address"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your 10-digit phone number"
            aria-label="Phone Number"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <div className="course-dropdown">
            <button
              type="button"
              className="course-trigger"
              onClick={() => setCourseOpen(!courseOpen)}
              aria-expanded={courseOpen}
            >
              <span>{formData.course || 'Choose your course'}</span>
              <span className={`course-arrow ${courseOpen ? 'rotated' : ''}`}>⌄</span>
            </button>

            {courseOpen && (
              <div className="course-options">
                {courses.map((course) => (
                  <button
                    type="button"
                    className={`course-option ${formData.course === course ? 'selected' : ''}`}
                    key={course}
                    onClick={() => {
                      setFormData({ ...formData, course });
                      setErrors({ ...errors, course: '' });
                      setCourseOpen(false);
                      setSuccess('');
                    }}
                  >
                    {course}
                    {formData.course === course && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
          {errors.course && <p className="error">{errors.course}</p>}

          <button type="submit">Register Now ↗</button>
        </form>

        {success && <p className="success">{success}</p>}
        <p className="footer-text">Begin your future today ✦</p>
      </div>
    </div>
  );
}

export default App;
