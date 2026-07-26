function StudentDetails({ formData, handleChange }) {
  return (
    <div className="card">
      <h2>👦 Student Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.student.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.student.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Preferred Name</label>
          <input
            type="text"
            name="preferredName"
            value={formData.student.preferredName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.student.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender *</label>
          <select
            name="gender"
            value={formData.student.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label>School Year *</label>
          <select
            name="schoolYear"
            value={formData.student.schoolYear}
            onChange={handleChange}
            required
          >
            <option value="">Select School Year</option>
            <option>Kindergarten</option>
            <option>Prep / Foundation</option>
            <option>Year 1</option>
            <option>Year 2</option>
            <option>Year 3</option>
            <option>Year 4</option>
            <option>Year 5</option>
            <option>Year 6</option>
            <option>Year 7</option>
            <option>Year 8</option>
            <option>Year 9</option>
            <option>Year 10</option>
            <option>Year 11</option>
            <option>Year 12</option>
            <option>University</option>
            <option>Adult</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>School Name</label>
          <input
            type="text"
            name="schoolName"
            value={formData.student.schoolName}
            onChange={handleChange}
          />
        </div>

      </div>
    </div>
  );
}

export default StudentDetails;
