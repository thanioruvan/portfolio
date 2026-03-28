import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      title: "MSc Cloud Computing",
      place: "University of Leicester, UK",
      duration: "2024 - 2025",
      grade: "Merit",
      desc: "Focused on Cloud Computing, AWS, Distributed Systems, and Scalable Architecture.",
      link: "https://le.ac.uk/",
      icon: "☁️"
    },
    {
      title: "Bachelor’s Degree",
      place: "Panimalar Engineering College, Chennai",
      duration: "2019 - 2023",
      grade: "GPA: 7.8",
      desc: "Studied Full Stack Development, UI/UX Design, and Database Management.",
      link: "https://panimalar.ac.in/",
      icon: "💻"
    }
  ];

  return (
    <div className="relative min-h-screen text-white px-4 py-20 overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* GLOW BLOBS (education theme) */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      </div>

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Education
        </motion.h1>

        {/* TIMELINE */}
        <div className="relative border-l border-white/20 space-y-12">

          {educationData.map((edu, i) => (
            <a
              key={i}
              href={edu.link}
              target="_blank"
              rel="noreferrer"
              className="block ml-6 relative"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
              >

                {/* DOT */}
                <div className="absolute -left-[14px] top-2 w-6 h-6 bg-blue-500 rounded-full blur-sm"></div>

                {/* CARD */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl transition duration-300 hover:bg-indigo-500/10 hover:shadow-indigo-500/40 cursor-pointer"
                >

                  {/* HEADER */}
                  <div className="flex items-center gap-4">

                    {/* ICON BOX */}
                    <div className="w-16 h-16 flex items-center justify-center text-3xl bg-white/10 border border-white/20 rounded-xl shadow-md">
                      {edu.icon}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">{edu.title}</h2>
                      <p className="text-gray-400 text-sm">{edu.place}</p>
                    </div>
                  </div>

                  {/* TIMELINE + GRADE */}
                  <div className="flex justify-between mt-4 text-sm text-gray-400">
                    <span>📅 {edu.duration}</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {edu.grade}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 mt-4">{edu.desc}</p>

                  {/* VISIT TEXT */}
                  <p className="mt-4 text-blue-400 hover:underline">
                    Visit Website →
                  </p>

                </motion.div>
              </motion.div>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Education;