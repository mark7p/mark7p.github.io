import { useEffect, useMemo, useState } from "react";
import type { SVGProps } from "react";

var languages = [
  {
    name: "Angular",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
      />
    ),
  },
  {
    name: "React",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      />
    ),
  },
  {
    name: "Vue",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
      />
    ),
  },
  {
    name: "Python",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
      />
    ),
  },
  {
    name: "Typescript",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      />
    ),
  },
  {
    name: "Javascript",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      />
    ),
  },
  {
    name: "Tauri",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg"
      />
    ),
  },
  {
    name: "HTML",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      />
    ),
  },
  {
    name: "CSS",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      />
    ),
  },
  {
    name: "Tailwind",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      />
    ),
  },
  {
    name: "MySQL",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
      />
    ),
  },
  {
    name: "Git",
    image: (
      <img
        className="w-32 h-32 select-disable"
        draggable="false"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      />
    ),
  },
];

export function MaterialSymbolsArrowBackIosNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsArrowForwardIos(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
      ></path>
    </svg>
  );
}

function LanguagesWidget() {
  var [languageIndex, setLanguageIndex] = useState(0);
  var [buttonHovered, setButtonHovered] = useState(false);
  var activeLanguage = useMemo(
    () => languages[languageIndex],
    [languageIndex, languages]
  );

  useEffect(() => {
    const intervalFunction = () => {
      if (!buttonHovered) {
        increaseLanguageIndex();
      }
    };
    const interval = setInterval(intervalFunction, 1300);
    return () => clearInterval(interval);
  }, [buttonHovered]);

  function decreaseLanguageIndex() {
    setLanguageIndex((prevIndex) =>
      prevIndex === 0 ? languages.length - 1 : prevIndex - 1
    );
  }

  function increaseLanguageIndex() {
    setLanguageIndex((prevIndex) =>
      prevIndex === languages.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="flex gap-2 items-center flex-shrink-0">
      <button
        className="mybutton decrease w-8 h-8 justify-items-center items-center rounded-full hover:bg-white/5 active:bg-white/10"
        onClick={() => decreaseLanguageIndex()}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        <MaterialSymbolsArrowBackIosNew></MaterialSymbolsArrowBackIosNew>
      </button>
      {activeLanguage.image}
      <button
        className="mybutton increase w-8 h-8 justify-items-center items-center rounded-full hover:bg-white/5 active:bg-white/10"
        onClick={() => increaseLanguageIndex()}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        <MaterialSymbolsArrowForwardIos></MaterialSymbolsArrowForwardIos>
      </button>
    </div>
  );
}

export default LanguagesWidget;
