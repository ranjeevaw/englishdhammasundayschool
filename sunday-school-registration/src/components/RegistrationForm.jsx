import StudentDetails from "./StudentDetails";
import ParentDetails from "./ParentDetails";
import AddressDetails from "./AddressDetails";
import EmergencyContact from "./EmergencyContact";
import MedicalDetails from "./MedicalDetails";
import PermissionDetails from "./PermissionDetails";
import AdditionalNotes from "./AdditionalNotes";

function RegistrationForm({
    formData,
    handleChange,
    handleSectionChange,
    handleCheckboxChange,
    handleNotesChange,
    onSubmit,
    submitButtonText,
    loading
}) {

    return (

        <form onSubmit={onSubmit}>

            <StudentDetails
                formData={formData}
                handleChange={handleChange}
            />

            <ParentDetails
                title="👨 Parent / Guardian 1"
                section="parent1"
                required={true}
                formData={formData}
                handleSectionChange={handleSectionChange}
            />

            <ParentDetails
                title="👩 Parent / Guardian 2 (Optional)"
                section="parent2"
                required={false}
                formData={formData}
                handleSectionChange={handleSectionChange}
            />

            <AddressDetails
                formData={formData}
                handleSectionChange={handleSectionChange}
            />

            <EmergencyContact
                formData={formData}
                handleSectionChange={handleSectionChange}
            />

            <MedicalDetails
                formData={formData}
                handleSectionChange={handleSectionChange}
            />

            <PermissionDetails
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
            />

            <AdditionalNotes
                formData={formData}
                handleNotesChange={handleNotesChange}
            />

            <div className="submit-section">
                <button
                    className="submit-btn"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Saving..." : submitButtonText}
                </button>
            </div>

        </form>

    );
}

export default RegistrationForm;
