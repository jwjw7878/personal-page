import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center px-4">
      <motion.h2
        className="text-3xl font-bold text-green-400 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="space-y-6 text-gray-800 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center gap-2">
          <FaEnvelope className="text-green-400" />
          <a href="mailto:jwp000708@gmail.com" className="hover:underline">
            jwp000708@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-2">
          <FaGithub className="text-gray-700" />
          <a
            href="https://github.com/jwjw7878"
            target="_blank"
            className="hover:underline"
          >
            https://github.com/jwjw7878
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
