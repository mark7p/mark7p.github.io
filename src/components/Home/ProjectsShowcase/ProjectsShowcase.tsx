import ProjectCard, { ProjectCardProps } from "./ProjectCard/ProjectCard";


const projects: ProjectCardProps[] = [
    {
        title: "Stringnotes Creatr",
        id: 1,
        description: "A powerful, easy-to-use lyric video creator for musicians and content creators. Stringnotes Creatr has seamless Adobe Premiere Pro integration allows for advanced customization, giving you complete creative control.",
        image: <img src="/src/assets/notecraftr.png"/>,
        link: "https://example.com/project1",
        tags: ["React", "React Native", "Typescript", "Python" , "Django"]
    },
    {
        title: "NoteCraftr",
        id: 2,
        description: "A tool for professionals who want to streamline their note-taking process. Easily craft customized notes by toggling note sections. With the ability to create and activate templates containing your composed sections, NoteCraftr empowers you to tailor every note to fit your exact needs. Once your note is complete, simply copy the result with it's seamless clipboard integration.",
        image: <img src="/src/assets/notecraftr.png"/>,
        link: "https://example.com/project1",
        tags: ["Angular", "Tauri", "Typescript", "Rust", "SCSS"]
    },
    {
        title: "Regextractr",
        id: 3,
        description: "A chrome extension to search text in real-time across any dynamic website. Perfect for front-end developers, researchers, and productivity enthusiasts working in the ever-changing landscape of Single Page Applications (SPAs).",
        image: <img src="/src/assets/notecraftr.png"/>,
        link: "https://example.com/project1",
        tags: ["Javascript", "CSS"]
    },

    
];

export default function ProjectShowcase() {
    return (
        <div className="h-screen border-t gap-3 flex flex-col border-custom-teal-50/50 justify-start items-center">
            <h1 className="text-3xl font-bold">Things I’ve Built</h1>
            <h2 className="text-lg font-medium text-custom-teal-50/70">A Mix of Projects That Challenge and Inspire Me</h2>
            {
                projects.map((project: ProjectCardProps) => {
                    return <ProjectCard project={project} key={project.id}></ProjectCard>
                })
            }
        </div>
    )
}