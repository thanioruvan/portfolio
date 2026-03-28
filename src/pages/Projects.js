import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Inventory System",
      desc: "MERN stack app with AWS deployment",
      path: "/projects/inventory"
    },
    {
      title: "Distributed Whiteboard",
      desc: "Real-time scalable system",
      path: "/projects/whiteboard"
    },
    {
      title: "Terraform Automation",
      desc: "Infrastructure as Code using Terraform",
      path: "/projects/terraform"
    }
  ];

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="tech background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/90 -z-10"></div>

      {/* FLOATING GRADIENT BLOBS */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 text-center px-4"
      >

        {/* TITLE */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          My Projects
        </motion.h1>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(proj.path)}
              className="cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl transition duration-300 hover:bg-purple-500/10 hover:shadow-purple-500/30 hover:border-purple-400"
            >
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p className="text-gray-400 mt-2">{proj.desc}</p>
            </motion.div>
          ))}

        </div>

      </motion.div>
    </div>
  );
}

export default Projects;