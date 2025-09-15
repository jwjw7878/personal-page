import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="font-suit fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 로고 */}
        <div className="text-xl font-bold text-green-400">박정우</div>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-green-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* 모바일 버튼 */}
        <button
          className="text-2xl text-green-400 md:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      <ul
        className={`md:hidden flex flex-col bg-white shadow-md absolute top-12 right-0 w-48 
        transition-transform duration-300 ease-in-out
        ${menu ? "translate-x-0" : "translate-x-full"}`}
      >
        <li className="px-4 py-3 border-b">
          <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>
        </li>
        <li className="px-4 py-3 border-b">
          <a href="#skills" onClick={() => setMenu(false)}>
            Skills
          </a>
        </li>
        <li className="px-4 py-3 border-b">
          <a href="#projects" onClick={() => setMenu(false)}>
            Projects
          </a>
        </li>
        <li className="px-4 py-3">
          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
