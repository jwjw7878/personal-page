import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
const projects = [
  {
    title: "next.js와 mongoDB를 활용한 게시판 프로젝트",
    description:
      "next.js에서의 mongoose 라이브러리를 이용한 api 통신 및 비밀번호 해쉬화",
    image: "/personal-page/images/notice-board.png",
    url: "https://notice-board-two.vercel.app/",
  },
  {
    title: "newsapi를 활용한 뉴스 웹페이지 ",
    description:
      "react-infiniteQuery를 활용한 무한 스크롤 기능, redux-toolkit을 활용한 북마크 기능",
    image: "/personal-page/images/news-app.png",
    url: "https://news-app-steel-tau.vercel.app/",
  },
  {
    title: "운동용품 쇼핑몰 프로젝트",
    description:
      "정적 랜딩페이지 및 상품 상세페이지 localStorage를 이용한 장바구니 기능 및 scss로 style 컴포넌트 분리.",
    image: "/personal-page/images/seasons-activity.png",
    url: "https://seasons-activity.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-10">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-lg shadow overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm text-green-600 hover:underline"
              >
                사이트 이동 →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
