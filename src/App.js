import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Inventory from "./pages/Inventory";
import Whiteboard from "./pages/Whiteboard";
import Terraform from "./pages/Terraform";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/inventory" element={<Inventory />} />
<Route path="/projects/whiteboard" element={<Whiteboard />} />
<Route path="/projects/terraform" element={<Terraform />} />
      </Routes>
    </Router>
  );
}

export default App;