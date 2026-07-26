function MedicalDetails({ formData, handleSectionChange }) {
  return (
    <div className="card">
      <h2>🏥 Medical Information</h2>

      <p>
        Please provide any medical information that our teachers should be aware
        of while caring for your child.
      </p>

      <div className="form-grid">

        <div className="form-group full-width">
          <label>Medical Conditions</label>
          <textarea
            name="medicalConditions"
            rows="3"
            value={formData.medical.medicalConditions}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group full-width">
          <label>Allergies</label>
          <textarea
            name="allergies"
            rows="3"
            value={formData.medical.allergies}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group full-width">
          <label>Current Medications</label>
          <textarea
            name="medications"
            rows="3"
            value={formData.medical.medications}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group full-width">
          <label>Dietary Requirements</label>
          <textarea
            name="dietaryRequirements"
            rows="2"
            value={formData.medical.dietaryRequirements}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group">
          <label>Family Doctor</label>
          <input
            type="text"
            name="doctorName"
            value={formData.medical.doctorName}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group">
          <label>Doctor Phone</label>
          <input
            type="tel"
            name="doctorPhone"
            value={formData.medical.doctorPhone}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group">
          <label>Medicare Number (Optional)</label>
          <input
            type="text"
            name="medicareNumber"
            value={formData.medical.medicareNumber}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

        <div className="form-group">
          <label>Ambulance Cover</label>
          <select
            name="ambulanceCover"
            value={formData.medical.ambulanceCover}
            onChange={(e) => handleSectionChange(e, "medical")}
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not Sure</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Additional Medical Information</label>
          <textarea
            name="additionalInformation"
            rows="4"
            value={formData.medical.additionalInformation}
            onChange={(e) => handleSectionChange(e, "medical")}
          />
        </div>

      </div>
    </div>
  );
}

export default MedicalDetails;
