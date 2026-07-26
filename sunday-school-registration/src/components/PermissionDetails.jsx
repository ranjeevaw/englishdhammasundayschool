function PermissionDetails({ formData, handleCheckboxChange }) {
  return (
    <div className="card">
      <h2>📝 Permissions & Consent</h2>

      <p>
        Please read each statement carefully and tick the applicable boxes.
      </p>

      <div className="checkbox-group">

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="photoConsent"
            checked={formData.permissions.photoConsent}
            onChange={(e) => handleCheckboxChange(e, "permissions")}
          />
          I give permission for my child to appear in Sunday School photos and videos used for educational and promotional purposes.
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="excursionConsent"
            checked={formData.permissions.excursionConsent}
            onChange={(e) => handleCheckboxChange(e, "permissions")}
          />
          I give permission for my child to participate in approved Sunday School excursions and activities.
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="emergencyMedicalConsent"
            checked={formData.permissions.emergencyMedicalConsent}
            onChange={(e) => handleCheckboxChange(e, "permissions")}
          />
          I authorise the Sunday School to obtain emergency medical treatment if I cannot be contacted.
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="emailConsent"
            checked={formData.permissions.emailConsent}
            onChange={(e) => handleCheckboxChange(e, "permissions")}
          />
          I agree to receive emails regarding Sunday School activities and announcements.
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="smsConsent"
            checked={formData.permissions.smsConsent}
            onChange={(e) => handleCheckboxChange(e, "permissions")}
          />
          I agree to receive SMS notifications regarding Sunday School activities.
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="acceptSchoolPolicies"
            checked={formData.permissions.acceptSchoolPolicies}
            onChange={(e) => handleCheckboxChange(e, "permissions")}
            required
          />
          <strong>
            I have read and agree to abide by the English Dhamma Sunday School policies and code of conduct.
          </strong>
        </label>

      </div>
    </div>
  );
}

export default PermissionDetails;
