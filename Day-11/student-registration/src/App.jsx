import { useState } from 'react';
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import './App.css';

function Home({ student }) {
  return (
    <div className="dashboard-content">
      <div className="welcome-banner">
        <div>
          <span className="banner-label">STUDENT PORTAL</span>
          <h1>Welcome back, {student.name}! 👋</h1>
          <p>Your student registration was successful.</p>
        </div>
        <div className="banner-emoji">🎓</div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-item stat-purple">
          <div className="stat-icon">👨‍🎓</div>
          <p>Total Students</p>
          <h2>1</h2>
          <span>Registered student</span>
        </div>

        <div className="dashboard-item stat-blue">
          <div className="stat-icon">📚</div>
          <p>Selected Course</p>
          <h2>{student.course}</h2>
          <span>Your enrolled course</span>
        </div>

        <div className="dashboard-item stat-green">
          <div className="stat-icon">✓</div>
          <p>Registration Status</p>
          <h2>Active</h2>
          <span>Registration completed</span>
        </div>
      </div>

      <section className="dashboard-panel">
        <div className="panel-heading">
          <div>
            <h2>Student Overview</h2>
            <p>Your registered student details</p>
          </div>
          <span className="status-badge">● Registered</span>
        </div>

        <div className="student-table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>EMAIL ADDRESS</th>
                <th>PHONE NUMBER</th>
                <th>COURSE</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="student-name-cell">
                    <div className="student-avatar">
                      {student.name.charAt(0).toUpperCase()}
                    </div>
                    <strong>{student.name}</strong>
                  </div>
                </td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  <span className="course-badge">{student.course}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-page-heading">
        <span>INFORMATION</span>
        <h1>About Us</h1>
        <p>Learn more about our Student Registration System.</p>
      </div>

      <section className="dashboard-panel info-panel">
        <div className="large-info-icon">🎓</div>
        <h2>Student Registration Portal</h2>
        <p>
          Our system provides a simple way to register students and view
          their registration details, selected course and registration status.
        </p>
      </section>
    </div>
  );
}

function Students({ student }) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-page-heading">
        <span>STUDENT MANAGEMENT</span>
        <h1>Students</h1>
        <p>View the registered student information.</p>
      </div>

      <section className="dashboard-panel">
        <div className="panel-heading">
          <div>
            <h2>Registered Students</h2>
            <p>Student information overview</p>
          </div>
          <span className="course-badge">1 Student</span>
        </div>

        <div className="student-table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>STUDENT NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>COURSE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="student-name-cell">
                    <div className="student-avatar">
                      {student.name.charAt(0).toUpperCase()}
                    </div>
                    <strong>{student.name}</strong>
                  </div>
                </td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  <span className="course-badge">{student.course}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-page-heading">
        <span>WE ARE HERE TO HELP</span>
        <h1>Contact Us</h1>
        <p>Get assistance with your student registration.</p>
      </div>

      <section className="dashboard-panel contact-panel">
        <div className="contact-icon">✉️</div>
        <h2>Administration Office</h2>
        <p>For student registration support, please contact the administration office.</p>
        <div className="contact-note">
          We are happy to help you with your registration queries.
        </div>
      </section>
    </div>
  );
}

function Dashboard({ student, onLogout }) {
  const navigate = useNavigate();

  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: '▦', end: true },
    { to: '/dashboard/about', label: 'About', icon: 'ⓘ' },
    { to: '/dashboard/students', label: 'Students', icon: '♙' },
    { to: '/dashboard/contact', label: 'Contact', icon: '✉' },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">S</div>
          <div>
            <h2>Student<span>Hub</span></h2>
            <p>MANAGEMENT PORTAL</p>
          </div>
        </div>

        <div className="sidebar-section-label">MAIN MENU</div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.end && <span className="active-dot">●</span>}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span>💡</span>
            <strong>Need assistance?</strong>
            <p>Visit the Contact section for support.</p>
          </div>

          <button
            type="button"
            className="sidebar-logout"
            onClick={onLogout}
          >
            <span>↪</span> Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="topbar-title">
            <h2>Student Dashboard</h2>
            <p>Home / Dashboard</p>
          </div>

          <div className="topbar-actions">
            <label className="topbar-search">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                onChange={(event) => {
                  const value = event.target.value;
                  const rows = document.querySelectorAll(
                    '.student-table tbody tr'
                  );

                  rows.forEach((row) => {
                    row.style.display = row.innerText
                      .toLowerCase()
                      .includes(value.toLowerCase())
                      ? ''
                      : 'none';
                  });
                }}
              />
            </label>

            <div className="notification-icon" title="Notifications">
              ♧<span></span>
            </div>

            <div className="topbar-profile">
              <div className="profile-avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <div className="profile-text">
                <strong>{student.name}</strong>
                <span>Student</span>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-page-body">
          <Routes>
            <Route index element={<Home student={student} />} />
            <Route path="about" element={<About />} />
            <Route path="students" element={<Students student={student} />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          <footer className="dashboard-footer">
            © 2026 StudentHub · Student Registration Portal
          </footer>
        </div>
      </main>
    </div>
  );
}

function Registration({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [courseOpen, setCourseOpen] = useState(false);

  const courses = ['BCA', 'MCA', 'BBA', 'B.Tech', 'Other'];

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setSuccess('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Student name is required';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess('Registration successful! Welcome, ' + formData.name);
      onRegister(formData);
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
              <span className={`course-arrow ${courseOpen ? 'rotated' : ''}`}>
                ⌄
              </span>
            </button>

            {courseOpen && (
              <div className="course-options">
                {courses.map((course) => (
                  <button
                    type="button"
                    className={`course-option ${
                      formData.course === course ? 'selected' : ''
                    }`}
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

function App() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  function handleRegister(formData) {
    setStudent(formData);
    navigate('/dashboard');
  }

  function handleLogout() {
    setStudent(null);
    navigate('/');
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Registration onRegister={handleRegister} />}
      />
      <Route
        path="/dashboard/*"
        element={
          student ? (
            <Dashboard student={student} onLogout={handleLogout} />
          ) : (
            <Registration onRegister={handleRegister} />
          )
        }
      />
      <Route
        path="*"
        element={<Registration onRegister={handleRegister} />}
      />
    </Routes>
  );
}

export default App;