import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      category: "💻 Development",
      items: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      category: "☁️ Cloud / AWS",
      items: [
        { name: "AWS EC2", level: 80 },
        { name: "S3", level: 85 },
        { name: "IAM", level: 75 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      category: "🛠️ Tools",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      category: "🎨 UI/UX",
      items: [
        { name: "Figma", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      category: "🧠 Soft Skills",
      items: [
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 88 },
        { name: "Adaptability", level: 87 },
        { name: "Time Management", level: 85 }
      ]
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

        {/* GLOW BLOBS */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      </div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Technical & Soft Skills
        </motion.h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/40 transition duration-300"
            >

              {/* CATEGORY */}
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>

              {/* SKILLS */}
              <div className="space-y-4">
                {section.items.map((skill, index) => (
                  <div key={index}>

                    {/* NAME */}
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                      ></motion.div>
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Skills;