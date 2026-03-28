import { motion } from "framer-motion";

function Terraform() {
  const techStack = ["Terraform", "AWS", "EC2", "S3"];

  const infraPoints = [
    "Automated provisioning using Terraform scripts",
    "Created resources on Amazon EC2 for compute",
    "Used Amazon S3 for storage and hosting",
    "Infrastructure managed as code for repeatable deployments"
  ];

  return (
    <div className="relative min-h-screen text-white px-4 py-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="cloud automation"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="absolute inset-0 bg-black/90 -z-10"></div>

      {/* GLOW */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full bottom-20 right-10"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Terraform Automation
        </motion.h1>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE - DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl space-y-4 hover:bg-indigo-500/10 transition"
          >
            <h2 className="text-xl font-semibold">Project Overview</h2>

            <p className="text-gray-300">
              Automated AWS infrastructure provisioning using Terraform,
              enabling scalable and consistent cloud deployments.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Provisioned EC2 and S3 using Terraform</li>
              <li>Implemented Infrastructure as Code</li>
              <li>Created reusable modules</li>
              <li>Reduced manual deployment effort</li>
              <li>Managed infrastructure lifecycle</li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE - TECH STACK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-cyan-500/10 transition"
          >
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-cyan-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* AWS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          className="mt-10 backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-blue-500/10 transition"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            AWS Infrastructure
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            {infraPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
}

export default Terraform;