import { motion } from "framer-motion";

function Inventory() {
  const reportUrl =
    "https://d1gdxrupq4ojlt.cloudfront.net/sc959_Final%20Report.docx";

  return (
    <div className="relative min-h-screen text-white flex items-center justify-center px-4 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          alt="inventory warehouse"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/90 -z-10"></div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center"
      >

        {/* TITLE */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Inventory Management System
        </motion.h1>

        {/* DETAILS CARD */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl text-left space-y-4 transition duration-300 hover:bg-blue-500/10 hover:shadow-blue-500/30 hover:border-blue-400"
        >
          <p className="text-gray-200">
            Designed and developed a full-stack inventory management system
            using MongoDB, Express.js, React.js, and Node.js.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Implemented CRUD operations with role-based access</li>
            <li>Real-time stock updates for efficient tracking</li>
            <li>Integrated chatbot for inventory assistance</li>
            <li>Optimized database queries for performance</li>
            <li>Implemented JWT-based authentication for security</li>
          </ul>
        </motion.div>

        {/* REPORT CARD */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="mt-8 backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl transition duration-300 hover:bg-green-500/10 hover:shadow-green-500/30 hover:border-green-400"
        >
          <h2 className="text-2xl font-semibold mb-4">Project Report</h2>

          <p className="text-gray-400 mb-4">
            Download the full documentation of the project.
          </p>

          {/* FINAL FIXED DOWNLOAD BUTTON */}
          <a
            href={reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Inventory_Report.docx"
            className="inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            📄 Download Report
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Inventory;