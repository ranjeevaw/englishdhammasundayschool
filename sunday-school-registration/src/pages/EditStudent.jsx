import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import {
  getStudent,
  updateStudent,
} from "../services/studentService";

function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    student: {
      firstName: "",
      lastName: "",
      preferredName: "",
      dateOfBirth: "",
      gender: "",
      schoolYear: "",
      schoolName: "",
    },

    parent1: {
      title: "",
      firstName: "",
      lastName: "",
      relationship: "",
      mobile: "",
      homePhone: "",
      email: "",
      occupation: "",
    },

    parent2: {
      title: "",
      firstName: "",
      lastName: "",
      relationship: "",
      mobile: "",
      homePhone: "",
      email: "",
      occupation: "",
    },

    address: {
      street: "",
      suburb: "",
      state: "",
      postcode: "",
    },

    emergency: {
      name: "",
      relationship: "",
      phone: "",
    },

    medical: {
      conditions: "",
      allergies: "",
      medications: "",
      dietaryRequirements: "",
    },

    permissions: {
      photos: false,
      excursions: false,
      medicalTreatment: false,
      schoolRules: false,
    },

    notes: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const data = await getStudent(id);
      setFormData(data);
    } catch (err) {
      console.error(err);
      alert("Unable to load student.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      student: {
        ...prev.student,
        [name]: value,
      },
    }));
  };

  const handleSectionChange = (e, section) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (e, section) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: checked,
      },
    }));
  };

  const handleNotesChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      notes: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateStudent(id, formData);

      alert("Student updated successfully.");

      navigate("/students");
    } catch (err) {
      console.error(err);
      alert("Unable to update student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Edit Student</h1>

      <RegistrationForm
        formData={formData}
        handleChange={handleChange}
        handleSectionChange={handleSectionChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNotesChange={handleNotesChange}
        onSubmit={handleSubmit}
        submitButtonText="Save Changes"
        loading={loading}
      />

<button
    type="button"
    onClick={() => navigate(-1)}
>
    Cancel
</button>

    </div>
  );
}

export default EditStudent;
