import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="font-suit h-screen flex flex-col justify-center items-center bg-gray-100 text-center overflow-hidden">
      <motion.h1
        className="text-4xl font-bold text-green-400 mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {"안녕하세요, 박정우입니다".split("").map((char, index) => (
          <motion.span
            className="inline-block \"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mb-6"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        웹 퍼블리셔 및 프론트엔드 포트폴리오입니다.
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-green-400 text-white rounded hover:bg-green-400 transition"
        >
          프로젝트 보기
        </a>
        <a
          href="/박정우-이력서.pdf"
          className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-blue-50 transition"
          download
        >
          이력서 다운로드
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
