function ParentDetails({
  title,
  section,
  required,
  formData,
  handleSectionChange
}) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Title</label>
          <select
            name="title"
            value={formData[section].title}
	    onChange={(e) => handleSectionChange(e, section)}
          >
            <option value="">Select</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
          </select>
        </div>

        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData[section].firstName}
	    onChange={(e) => handleSectionChange(e, section)}
            required={required}
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData[section].lastName}
	    onChange={(e) => handleSectionChange(e, section)}
            required={required}
          />
        </div>

        <div className="form-group">
          <label>Relationship *</label>
          <select
            name="relationship"
            value={formData[section].relationship}
	    onChange={(e) => handleSectionChange(e, section)}
            required={required}
          >
            <option value="">Select</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Guardian</option>
            <option>Grandparent</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mobile *</label>
          <input
            type="tel"
            name="mobile"
            value={formData[section].mobile}
	    onChange={(e) => handleSectionChange(e, section)}
            required={required}
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData[section].email}
	    onChange={(e) => handleSectionChange(e, section)}
            required={required}
          />
        </div>

      </div>
    </div>
  );
}

export default ParentDetails;
