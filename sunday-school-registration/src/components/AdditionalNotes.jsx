function AdditionalNotes({ formData, handleNotesChange }) {
  return (
    <div className="card">
      <h2>💬 Additional Notes</h2>

      <p>
        Please provide any additional information you would like the Sunday
        School teachers to know about your child.
      </p>

      <div className="form-group">
        <label>Additional Notes</label>

        <textarea
          name="notes"
          rows="6"
          placeholder="Enter any additional information..."
          value={formData.notes}
          onChange={handleNotesChange}
        />
      </div>
    </div>
  );
}

export default AdditionalNotes;
