import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="tech background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80 -z-10"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4">

        {/* NAME */}
       <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.25, 0.8, 0.25, 1]
  }}
  whileHover={{
    scale: 1.06,
    textShadow: "0px 0px 30px rgba(59,130,246,0.6)"
  }}
  className="
    text-5xl md:text-6xl font-bold mb-4 cursor-pointer
    transition-all duration-500
    bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400
    bg-[length:200%_200%] bg-clip-text text-transparent
    hover:animate-[gradientMove_4s_ease_infinite]
  "
>
  Shrivarshan Chinniah
</motion.h1>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Cloud Engineer • Full Stack Developer
        </motion.p>

        {/* SUMMARY */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl text-gray-300 text-center mb-10 leading-relaxed hover:text-white transition duration-300"
        >
          MSc Cloud Computing graduate (Merit) with hands-on experience in AWS,
          full-stack development, and scalable system design. Passionate about
          building efficient cloud-based applications and solving real-world
          problems through technology. Right to work in the UK.
        </motion.p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PHONE */}
          <motion.a
            href="tel:+447423142029"
            whileHover={{ scale: 1.08 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl transition duration-300 hover:bg-blue-500/10 hover:shadow-blue-500/30 hover:border-blue-400"
          >
            <p className="text-2xl">📞</p>
            <p className="mt-2 font-semibold">Call Me</p>
            <p className="text-gray-400 text-sm">+44 7423 142029</p>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            href="mailto:srivarshan0015@gmail.com"
            whileHover={{ scale: 1.08 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl transition duration-300 hover:bg-green-500/10 hover:shadow-green-500/30 hover:border-green-400"
          >
            <p className="text-2xl">📧</p>
            <p className="mt-2 font-semibold">Send Email</p>
            <p className="text-gray-400 text-sm">Click to compose mail</p>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/sri-varshan-a240562b0/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl transition duration-300 hover:bg-purple-500/10 hover:shadow-purple-500/30 hover:border-purple-400"
          >
            <p className="text-2xl">🔗</p>
            <p className="mt-2 font-semibold">LinkedIn</p>
            <p className="text-gray-400 text-sm">View Profile</p>
          </motion.a>

        </div>
      </div>
    </div>
  );
}

export default Home;