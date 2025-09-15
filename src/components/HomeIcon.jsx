import React, { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";

function HomeIcon() {
  const [icon, setIcon] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        setIcon(true);
      } else {
        setIcon(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const backtoTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {icon && (
        <div
          className="bg-green-400 p-4 rounded-full fixed bottom-10 right-4 z-10 cursor-pointer"
          onClick={backtoTopBtn}
        >
          <IoMdHome className="text-white text-2xl" />
        </div>
      )}
    </>
  );
}

export default HomeIcon;
