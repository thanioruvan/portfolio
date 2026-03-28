import { motion } from "framer-motion";

function Whiteboard() {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-center px-4 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          alt="network background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="absolute inset-0 bg-black/90 -z-10"></div>

      {/* GLOW BLOBS */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="relative z-10 w-full max-w-3xl text-center"
      >

        {/* TITLE */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Distributed Whiteboard System
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ scale: 1.02 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl text-left space-y-4 transition duration-300 hover:bg-purple-500/10 hover:shadow-purple-500/30 hover:border-purple-400"
        >
          <p className="text-gray-200">
            Developed a real-time collaborative whiteboard application enabling
            multiple users to draw and interact simultaneously across different locations.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Implemented real-time drawing using WebSockets (Socket.io)</li>
            <li>Enabled multi-user collaboration with instant updates</li>
            <li>Built scalable backend architecture using Node.js</li>
            <li>Optimized data synchronization for low latency performance</li>
            <li>Designed responsive frontend using React.js</li>
          </ul>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="mt-8 backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Node.js", "Socket.io", "JavaScript"].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-blue-500/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ACTION BUTTONS */}
       <motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }}
  className="mt-8 flex justify-center gap-4"
>
  <button
    className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
  >
    🔗 Live Demo
  </button>

  <button
    className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
  >
    💻 GitHub
  </button>
</motion.div>

      </motion.div>
    </div>
  );
}

export default Whiteboard;