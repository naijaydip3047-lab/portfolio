import { FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* Left */}
        <h2 className="text-xl font-semibold mb-4 md:mb-0">
          © 2026 Jaydip Portfolio
        </h2>

        {/* Right - Contact Icons */}
        <div className="flex space-x-6 text-xl">

          {/* Gmail */}
          <a
            href="mailto:naijaydip3047@gmail.com"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/naijaydip3047-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* Phone */}
          <a
            href="tel:+91 9328264118"
            className="hover:text-green-400 transition duration-300"
          >
            <FaPhone />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;