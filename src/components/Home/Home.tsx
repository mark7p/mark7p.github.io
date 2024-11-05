import "./Home.css";
import LanguagesWidget from "./LanguagesWidget/LanguagesWidget";
import ProjectShowcase from "./ProjectsShowcase/ProjectsShowcase";

function Home() {
  return (
    <>
      <div className="flex body h-[calc(100vh-5rem)] gap-y-12 content-center justify-center px-5 gap-4 flex-wrap">
        <div className="intro-text flex flex-col flex-grow w-min min-w-96 max-w-3xl">
          <h1 className="name text-6xl pb-2 text-left font-extrabold ">
            Gen Mark Paniterce
          </h1>
          <p className="text-2xl text-left text-custom-teal-50/70">
            What’s good? I’m a front-end dev passionate about making interactive
            web experiences and laying down music tracks whenever inspiration
            strikes.
          </p>
        </div>
        <LanguagesWidget></LanguagesWidget>
      </div>
      <ProjectShowcase></ProjectShowcase>
    </>
  );
}

export default Home;
