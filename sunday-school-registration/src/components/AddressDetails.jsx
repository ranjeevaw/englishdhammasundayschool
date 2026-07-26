function AddressDetails({ formData, handleSectionChange }) {
  return (
    <div className="card">
      <h2>🏠 Residential Address</h2>

      <div className="form-grid">

        <div className="form-group full-width">
          <label>Street Address *</label>
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={(e) => handleSectionChange(e, "address")}
            required
          />
        </div>

        <div className="form-group">
          <label>Suburb *</label>
          <input
            type="text"
            name="suburb"
            value={formData.address.suburb}
            onChange={(e) => handleSectionChange(e, "address")}
            required
          />
        </div>

        <div className="form-group">
          <label>State *</label>
          <select
            name="state"
            value={formData.address.state}
            onChange={(e) => handleSectionChange(e, "address")}
            required
          >
            <option value="">Select State</option>
            <option>VIC</option>
            <option>NSW</option>
            <option>QLD</option>
            <option>SA</option>
            <option>WA</option>
            <option>TAS</option>
            <option>NT</option>
            <option>ACT</option>
          </select>
        </div>

        <div className="form-group">
          <label>Postcode *</label>
          <input
            type="text"
            name="postcode"
            value={formData.address.postcode}
            onChange={(e) => handleSectionChange(e, "address")}
            maxLength="4"
            required
          />
        </div>

      </div>
    </div>
  );
}

export default AddressDetails;
