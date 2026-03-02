/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {" "}
        <motion.span
          animate={{ color: ["#2563eb", "#9333ea", "#2563eb"] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="inline-block"
        >
          About
        </motion.span>{" "} Our Job Portal
        </motion.h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          Our platform connects talented job seekers with top companies around
          the world. We aim to simplify the hiring process by providing a
          seamless experience for both applicants and recruiters.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Whether you are looking for your dream job or searching for the
          perfect candidate, our portal offers powerful tools to help you
          succeed in your career journey.
        </p>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
          <h2 className="text-2xl text-primary font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To empower professionals by providing opportunities, resources,
            and connections that drive career growth and innovation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;