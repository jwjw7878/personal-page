import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-6">About me</h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
        안녕하세요! 저는 웹 퍼블리셔 및 프론트엔드 개발자 지망생 박정우입니다.{" "}
        <br />
        실무에서 사용할 수 있는 깔끔한 반응형 레이아웃을 목표로 학습하고 있으며,
        JS프레임워크 및 라이브러리와 CSS 전처리기 학습을 통해 사용자 경험을
        고려한 UI에 관심이 많습니다.
      </p>
    </section>
  );
}

export default About;
