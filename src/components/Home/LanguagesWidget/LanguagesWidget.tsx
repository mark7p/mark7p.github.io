import { useEffect, useMemo, useState } from "react";
import type { SVGProps } from "react";

const languages = [
  {
    name: "Angular",
    image: (
      <i className="devicon-angular-plain text-[8rem]"></i>
    ),
  },
  {
    name: "React",
    image: (
      <i className="devicon-react-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Vue",
    image: (
      <i className="devicon-vuejs-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Python",
    image: (
      <i className="devicon-python-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Typescript",
    image: (
      <i className="devicon-typescript-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Javascript",
    image: (
      <i className="devicon-javascript-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Django",
    image: (
      <i className="devicon-djangorest-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Tauri",
    image: (
      <i className="devicon-tauri-plain text-[8rem]"></i>
    ),
  },
  {
    name: "HTML",
    image: (
      <i className="devicon-html5-plain text-[8rem]"></i>
    ),
  },
  {
    name: "CSS",
    image: (
      <i className="devicon-css3-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Tailwind",
    image: (
      <i className="devicon-tailwindcss-plain text-[8rem]"></i>
    ),
  },
  {
    name: "MySQL",
    image: (
      <i className="devicon-mysql-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Git",
    image: (
      <i className="devicon-git-plain text-[8rem]"></i>
    ),
  },
  {
    name: "Godot",
    image: (
      <i className="devicon-godot-plain text-[8rem]"></i>
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
        fill="currentColor"
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
        fill="currentColor"
        d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
      ></path>
    </svg>
  );
}

function LanguagesWidget() {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [buttonHovered, setButtonHovered] = useState(false);
  const activeLanguage = useMemo(
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
    <div className="flex gap-2 items-center flex-shrink-0 hover:text-custom-teal-100">
      <button
        className="mybutton decrease w-8 h-8 justify-items-center items-center rounded-full hover:bg-custom-teal-200/10 active:bg-custom-teal-200/20"
        onClick={() => decreaseLanguageIndex()}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        <MaterialSymbolsArrowBackIosNew></MaterialSymbolsArrowBackIosNew>
      </button>
      <div className="logo-container flex flex-col gap-2 ">
        {activeLanguage.image}
      <span className="select-disable text-custom-teal-50/70">{activeLanguage.name}</span>
      </div>

      <button
        className="mybutton increase w-8 h-8 justify-items-center items-center rounded-full hover:bg-custom-teal-200/10 active:bg-custom-teal-200/20"
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
