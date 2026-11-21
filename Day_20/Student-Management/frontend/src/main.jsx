
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const API = 'http://127.0.0.1:8000/api/students/';

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', course: '', age: '' });
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState('Dashboard');

  async function load() {
    try {
      const r = await fetch(API);
      if (!r.ok) throw new Error('API unavailable');
      setStudents(await r.json());
      setError('');
    } catch {
      setError('Unable to connect to backend. Start Django server first.');
    }
  }

  useEffect(() => {
    load();
  }, []);

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function reset() {
    setForm({ name: '', email: '', course: '', age: '' });
    setEditing(null);
    setModal(false);
  }

  function openAdd() {
    reset();
    setError('');
    setModal(true);
  }

  async function submit(e) {
    e.preventDefault();
    const payload = { ...form, age: Number(form.age) };

    try {
      const r = await fetch(editing ? API + editing + '/' : API, {
        method: editing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await r.json();

      if (!r.ok) throw new Error(Object.values(data).flat().join(' '));

      reset();
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(id) {
    if (!window.confirm('Are you sure you want to delete this student?')) return;

    try {
      const r = await fetch(API + id + '/', { method: 'DELETE' });
      if (!r.ok) throw new Error('Delete failed');
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  function edit(s) {
    setEditing(s.id);
    setForm({ name: s.name, email: s.email, course: s.course, age: s.age });
    setError('');
    setModal(true);
  }

  const filtered = students.filter(s =>
    [s.name, s.email, s.course].join(' ').toLowerCase().includes(search.toLowerCase())
  );

  const courses = [...new Set(students.map(s => s.course).filter(Boolean))];

  function courseCount(course) {
    return students.filter(s => s.course === course).length;
  }

  return (
    <div className="app-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">🏢</div>
          <div>
            <strong>EduSphere</strong>
            <small>Student Management Portal</small>
          </div>
        </div>

        <div className="nav-label">MENU</div>

        <div
          className={`nav-item ${page === 'Dashboard' ? 'active' : ''}`}
          onClick={() => { setPage('Dashboard'); setSearch(''); }}
          style={{ cursor: 'pointer' }}
        >
          <span>▦</span> Dashboard
        </div>

        <div
          className={`nav-item ${page === 'Students' ? 'active' : ''}`}
          onClick={() => { setPage('Students'); setSearch(''); }}
          style={{ cursor: 'pointer' }}
        >
          <span>♙</span> Students
        </div>

        <div
          className={`nav-item ${page === 'Courses' ? 'active' : ''}`}
          onClick={() => { setPage('Courses'); setSearch(''); }}
          style={{ cursor: 'pointer' }}
        >
          <span>▤</span> Courses
        </div>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">✦</div>
            <strong>EduSphere Portal</strong>
            <p>Manage student records and courses easily.</p>
          </div>

          <div className="profile">
            <div className="avatar">SM</div>
            <div className="profile-info">
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
            <span className="profile-dots">•••</span>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="main-area">

        <header className="topbar">
          <div>
            <div className="breadcrumb">Pages / {page}</div>
            <h2>{page === 'Dashboard' ? 'Student Dashboard' : page}</h2>
          </div>

          <div className="topbar-right">
            <div className="top-search">
              <span>⌕</span>
              <input
                placeholder={`Search ${page.toLowerCase()}...`}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <kbd>⌘ K</kbd>
            </div>
            <div className="top-avatar">SM</div>
          </div>
        </header>

        <main className="dashboard">

          {/* DASHBOARD PAGE */}
          {page === 'Dashboard' && (
            <>
              <section className="welcome">
                <div>
                  <span className="welcome-tag">OVERVIEW</span>
                  <h1>Welcome to EduSphere 👋</h1>
                  <p>Here's an overview of your student management system.</p>
                </div>

                <button className="add-button" onClick={openAdd}>
                  <span>＋</span> Add New Student
                </button>
              </section>

              {error && <div className="error-message">⚠ {error}</div>}

              <section className="stats-grid">

                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon purple">♙</span>
                    <span className="stat-badge">Total</span>
                  </div>
                  <div className="stat-label">Total Students</div>
                  <div className="stat-value">{students.length}</div>
                  <div className="stat-foot">Registered students</div>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon blue">▤</span>
                    <span className="stat-badge">Courses</span>
                  </div>
                  <div className="stat-label">Available Courses</div>
                  <div className="stat-value">{courses.length}</div>
                  <div className="stat-foot">Unique course programs</div>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon green">✓</span>
                    <span className="stat-badge">Records</span>
                  </div>
                  <div className="stat-label">Student Records</div>
                  <div className="stat-value">{students.length}</div>
                  <div className="stat-foot">Database entries</div>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon orange">⌕</span>
                    <span className="stat-badge">Search</span>
                  </div>
                  <div className="stat-label">Filtered Results</div>
                  <div className="stat-value">{filtered.length}</div>
                  <div className="stat-foot">Matching records</div>
                </div>

              </section>

              <section className="student-panel">
                <div className="student-heading">
                  <div>
                    <h2>Student Directory</h2>
                    <p>Manage, view and update your student records.</p>
                  </div>
                  <button className="outline-button" onClick={load}>↻ Refresh</button>
                </div>

                <div className="table-toolbar">
                  <div className="table-search">
                    <span>⌕</span>
                    <input
                      placeholder="Search by name, email or course..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                  <span className="record-count">{filtered.length} records</span>
                </div>

                <StudentTable
                  filtered={filtered}
                  edit={edit}
                  remove={remove}
                  openAdd={openAdd}
                  search={search}
                />

                <div className="table-footer">
                  Showing <strong>{filtered.length}</strong> of <strong>{students.length}</strong> students
                </div>
              </section>
            </>
          )}

          {/* STUDENTS PAGE */}
          {page === 'Students' && (
            <>
              <section className="welcome">
                <div>
                  <span className="welcome-tag">STUDENT MANAGEMENT</span>
                  <h1>Students 👩‍🎓</h1>
                  <p>View, add, edit and manage all registered students.</p>
                </div>

                <button className="add-button" onClick={openAdd}>
                  <span>＋</span> Add New Student
                </button>
              </section>

              {error && <div className="error-message">⚠ {error}</div>}

              <section className="stats-grid">
                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon purple">♙</span>
                    <span className="stat-badge">Total</span>
                  </div>
                  <div className="stat-label">Total Students</div>
                  <div className="stat-value">{students.length}</div>
                  <div className="stat-foot">Registered students</div>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon orange">⌕</span>
                    <span className="stat-badge">Search</span>
                  </div>
                  <div className="stat-label">Search Results</div>
                  <div className="stat-value">{filtered.length}</div>
                  <div className="stat-foot">Matching students</div>
                </div>
              </section>

              <section className="student-panel">
                <div className="student-heading">
                  <div>
                    <h2>Student Directory</h2>
                    <p>Complete list of student records.</p>
                  </div>
                  <button className="outline-button" onClick={load}>↻ Refresh</button>
                </div>

                <div className="table-toolbar">
                  <div className="table-search">
                    <span>⌕</span>
                    <input
                      placeholder="Search by name, email or course..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                  <span className="record-count">{filtered.length} records</span>
                </div>

                <StudentTable
                  filtered={filtered}
                  edit={edit}
                  remove={remove}
                  openAdd={openAdd}
                  search={search}
                />

                <div className="table-footer">
                  Showing <strong>{filtered.length}</strong> of <strong>{students.length}</strong> students
                </div>
              </section>
            </>
          )}

          {/* COURSES PAGE */}
          {page === 'Courses' && (
            <>
              <section className="welcome">
                <div>
                  <span className="welcome-tag">COURSE MANAGEMENT</span>
                  <h1>Courses 📚</h1>
                  <p>Explore courses and see the number of enrolled students.</p>
                </div>
              </section>

              {error && <div className="error-message">⚠ {error}</div>}

              <section className="stats-grid">
                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon blue">▤</span>
                    <span className="stat-badge">Courses</span>
                  </div>
                  <div className="stat-label">Total Courses</div>
                  <div className="stat-value">{courses.length}</div>
                  <div className="stat-foot">Unique courses</div>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-icon green">♙</span>
                    <span className="stat-badge">Students</span>
                  </div>
                  <div className="stat-label">Enrolled Students</div>
                  <div className="stat-value">{students.length}</div>
                  <div className="stat-foot">Across all courses</div>
                </div>
              </section>

              <section className="student-panel">
                <div className="student-heading">
                  <div>
                    <h2>Available Courses</h2>
                    <p>Courses registered in the student database.</p>
                  </div>
                  <button className="outline-button" onClick={load}>↻ Refresh</button>
                </div>

                <div className="table-toolbar">
                  <div className="table-search">
                    <span>⌕</span>
                    <input
                      placeholder="Search course..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                  <span className="record-count">{courses.filter(c => c.toLowerCase().includes(search.toLowerCase())).length} courses</span>
                </div>

                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>COURSE</th>
                        <th>COURSE ID</th>
                        <th>STUDENTS ENROLLED</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.filter(c => c.toLowerCase().includes(search.toLowerCase())).map((course, i) => (
                        <tr key={course}>
                          <td>
                            <div className="student-cell">
                              <div className={`student-avatar avatar-${i % 5}`}>
                                {course.substring(0, 2).toUpperCase()}
                              </div>
                              <div className="student-name">
                                <strong>{course}</strong>
                                <small>Academic Program</small>
                              </div>
                            </div>
                          </td>
                          <td>COURSE-{String(i + 1).padStart(3, '0')}</td>
                          <td>
                            <span className="course-chip">
                              {courseCount(course)} Students
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {!courses.filter(c => c.toLowerCase().includes(search.toLowerCase())).length && (
                    <div className="empty">
                      <div className="empty-icon">▤</div>
                      <strong>No courses found</strong>
                      <p>Add students with courses to see them here.</p>
                    </div>
                  )}
                </div>

                <div className="table-footer">
                  Total <strong>{courses.length}</strong> courses available
                </div>
              </section>
            </>
          )}

          <footer className="footer">
            <span>© 2026 EduSphere</span>
            <span>Day 20 · Foundation Mini Project · React + Django</span>
          </footer>

        </main>
      </div>

      {/* ADD / EDIT MODAL */}
      {modal && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && reset()}>
          <div className="modal-box">
            <div className="modal-header">
              <div>
                <span className="modal-tag">{editing ? 'EDIT RECORD' : 'NEW RECORD'}</span>
                <h2>{editing ? 'Update Student' : 'Add New Student'}</h2>
                <p>Enter the student's information below.</p>
              </div>
              <button className="close-btn" onClick={reset}>×</button>
            </div>

            <form onSubmit={submit} className="modal-form">
              <label>Full Name
                <input name="name" placeholder="Enter full name" value={form.name} onChange={change} required />
              </label>

              <label>Email Address
                <input name="email" type="email" placeholder="name@example.com" value={form.email} onChange={change} required />
              </label>

              <label>Course
                <input name="course" placeholder="e.g. BCA, BSc, MCA" value={form.course} onChange={change} required />
              </label>

              <label>Age
                <input name="age" type="number" min="1" placeholder="Enter age" value={form.age} onChange={change} required />
              </label>

              {error && <div className="error-message">{error}</div>}

              <div className="modal-actions">
                <button type="button" className="outline-button" onClick={reset}>Cancel</button>
                <button className="add-button" type="submit">
                  {editing ? 'Save Changes' : '＋ Add Student'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

/* REUSABLE STUDENT TABLE */

function StudentTable({ filtered, edit, remove, openAdd, search }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>STUDENT</th>
            <th>EMAIL ADDRESS</th>
            <th>COURSE</th>
            <th>AGE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((s, i) => (
            <tr key={s.id}>
              <td>
                <div className="student-cell">
                  <div className={`student-avatar avatar-${i % 5}`}>
                    {s.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                  </div>
                  <div className="student-name">
                    <strong>{s.name}</strong>
                    <small>Student ID #{s.id}</small>
                  </div>
                </div>
              </td>

              <td className="email-cell">{s.email}</td>
              <td><span className="course-chip">{s.course}</span></td>
              <td>{s.age} yrs</td>

              <td>
                <div className="row-actions">
                  <button title="Edit" className="action-btn edit-btn" onClick={() => edit(s)}>✎</button>
                  <button title="Delete" className="action-btn delete-btn" onClick={() => remove(s.id)}>⌫</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!filtered.length && (
        <div className="empty">
          <div className="empty-icon">♙</div>
          <strong>No students found</strong>
          <p>{search ? 'Try a different search term.' : 'Add your first student to get started.'}</p>
          {!search && <button className="add-button" onClick={openAdd}>＋ Add Student</button>}
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
