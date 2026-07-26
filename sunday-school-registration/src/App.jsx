import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Success from "./pages/Success";
import StudentReport from "./pages/StudentReport";
import AdminLogin from "./pages/AdminLogin";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
<HashRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/students" element={<StudentReport />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/students/:id" element={<EditStudent />} />
      </Routes>
</HashRouter>
  );
}

export default App;
