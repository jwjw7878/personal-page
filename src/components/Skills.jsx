import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
// eslint-disable-next-line
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    color: "bg-orange-100",
    icon: <FaHtml5 className="text-orange-400" />,
  },
  {
    name: "CSS",
    color: "bg-blue-100",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "Sass",
    color: "bg-pink-100",
    icon: <FaSass className="text-pink-500" />,
  },
  {
    name: "Tailwind CSS",
    color: "bg-sky-100",
    icon: <RiTailwindCssFill className="text-sky-400" />,
  },
  {
    name: "JavaScript",
    color: "bg-yellow-100",
    icon: <IoLogoJavascript className="text-yellow-400" />,
  },
  {
    name: "React",
    color: "bg-sky-200",
    icon: <FaReact className="text-sky-600" />,
  },
  {
    name: "Next.js",
    color: "bg-gray-200",
    icon: <RiNextjsFill className="text-gray-600" />,
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            className={`p-6 rounded-lg shadow-md ${skill.color} font-semibold`}
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
          >
            <div className="flex justify-center text-3xl mb-2">
              {skill.icon}
            </div>
            <div className="text-gray-800">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
