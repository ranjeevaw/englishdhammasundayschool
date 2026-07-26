import { useState } from "react";
import StudentDetails from "../components/StudentDetails";
import ParentDetails from "../components/ParentDetails";
import AddressDetails from "../components/AddressDetails";
import EmergencyContact from "../components/EmergencyContact";
import MedicalDetails from "../components/MedicalDetails";
import PermissionDetails from "../components/PermissionDetails";
import AdditionalNotes from "../components/AdditionalNotes";
import { registerStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

function Register() {

const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const [formData, setFormData] = useState({
  student: {
    firstName: "",
    lastName: "",
    preferredName: "",
    dateOfBirth: "",
    gender: "",
    schoolYear: "",
    schoolName: ""
  },

  parent1: {
    title: "",
    firstName: "",
    lastName: "",
    relationship: "",
    mobile: "",
    homePhone: "",
    email: "",
    occupation: ""
  },

  parent2: {
    title: "",
    firstName: "",
    lastName: "",
    relationship: "",
    mobile: "",
    homePhone: "",
    email: "",
    occupation: ""
  },

  address: {
    street: "",
    suburb: "",
    state: "",
    postcode: ""
  },

  emergency: {
    name: "",
    relationship: "",
    phone: ""
  },

  medical: {
    conditions: "",
    allergies: "",
    medications: "",
    dietaryRequirements: ""
  },

  permissions: {
    photos: false,
    excursions: false,
    medicalTreatment: false,
    schoolRules: false
  },

  notes: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    student: {
      ...prev.student,
      [name]: value
    }
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
    
    const studentId = await registerStudent(formData);
    
    console.log("Student Registered:", studentId);
    
    navigate("/success");
    
  } catch (err) {
    console.error(err);
    
    alert("Unable to register student. Please try again.");
    
  } finally {
    setLoading(false);
  } 
};  

  return (

<div className="container">

<RegistrationForm
    formData={formData}
    handleChange={handleChange}
    handleSectionChange={handleSectionChange}
    handleCheckboxChange={handleCheckboxChange}
    handleNotesChange={handleNotesChange}
    onSubmit={handleSubmit}
    submitButtonText="Register Student"
    loading={loading}
/>

    </div>


  );

}

export default Register;
