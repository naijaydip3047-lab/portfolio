import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">Jaydip</span> 👋
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Frontend Developer | React & Tailwind CSS
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;