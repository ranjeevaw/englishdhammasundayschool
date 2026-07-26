function EmergencyContact({ formData, handleSectionChange }) {
  return (
    <div className="card">
      <h2>🚨 Emergency Contact</h2>

      <p>
        Please provide a contact person who can be reached if the parent or
        guardian cannot be contacted.
      </p>

      <div className="form-grid">

        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.emergency.firstName}
            onChange={(e) => handleSectionChange(e, "emergency")}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.emergency.lastName}
            onChange={(e) => handleSectionChange(e, "emergency")}
            required
          />
        </div>

        <div className="form-group">
          <label>Relationship *</label>
          <input
            type="text"
            name="relationship"
            placeholder="e.g. Aunt, Uncle, Grandparent"
            value={formData.emergency.relationship}
            onChange={(e) => handleSectionChange(e, "emergency")}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            placeholder="04xxxxxxxx"
            value={formData.emergency.mobile}
            onChange={(e) => handleSectionChange(e, "emergency")}
            required
          />
        </div>

      </div>
    </div>
  );
}

export default EmergencyContact;
