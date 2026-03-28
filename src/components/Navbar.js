import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="fixed top-5 w-full flex justify-center z-50">

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-3 rounded-full flex gap-8 text-white shadow-lg">

        {/* HOME */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link
            to="/"
            className="transition duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          >
            Home
          </Link>
        </motion.div>

        {/* PROJECTS */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link
            to="/projects"
            className="transition duration-300 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          >
            Projects
          </Link>
        </motion.div>

        {/* EDUCATION */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link
            to="/education"
            className="transition duration-300 hover:text-green-400 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
          >
            Education
          </Link>
        </motion.div>

        {/* SKILLS */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link
            to="/skills"
            className="transition duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
          >
            Skills
          </Link>
        </motion.div>

      </div>

    </div>
  );
}

export default Navbar;