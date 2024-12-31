import ProjectCard, { ProjectCardProps } from "./ProjectCard/ProjectCard";
import stringnotesCreatrImg from "/src/assets/stringnotes-creatr.png";
import stringnotesAnimatrImg from "/src/assets/stringnotes-animatr.png";
import notecraftrImg from "/src/assets/notecraftr.png";
// import regextractrImg from "/src/assets/regextractr.png";

const projects: ProjectCardProps[] = [
    
    {
        title: "NoteCraftr",
        id: 2,
        description: "A tool for professionals who want to streamline their note-taking process. Easily craft customized notes by toggling note sections. With the ability to create and activate templates containing your composed sections, NoteCraftr empowers you to tailor every note to fit your exact needs. Once your note is complete, simply copy the result with it's seamless clipboard integration.",
        image: <img src={notecraftrImg}/>,
        link: "https://apps.microsoft.com/detail/9nttn07t2pc2?cid=DevShareMCLPCS&hl=en-us&gl=PH",
        tags: ["Angular", "RXJS", "Redux", "Tauri", "Typescript", "SCSS"]
    },
    {
        title: "Stringnotes Creatr",
        id: 1,
        description: "A powerful, easy-to-use lyric video creator for musicians and content creators. Stringnotes Creatr has seamless Adobe Premiere Pro integration allows for advanced customization, giving you complete creative control.",
        image: <img src={stringnotesCreatrImg}/>,
        tags: ["React", "Redux", "React Native", "Typescript", "Python", "Django"]
    },
    // {
    //     title: "Regextractr",
    //     id: 3,
    //     description: "A chrome extension to search text in real-time across any dynamic website. Perfect for front-end developers, researchers, and productivity enthusiasts working in the ever-changing landscape of Single Page Applications (SPAs).",
    //     image: <img src={regextractrImg}/>,
    //     link: "https://example.com/project1",
    //     tags: ["Angular", "Javascript", "CSS"]
    // },
    {
        title: "Stringnotes Animatr",
        id: 4,
        description: "Animation Tool for my YouTube Channel that imports MIDI files and syncs a guitar playing animation, integrated with OBS.",
        image: <img src={stringnotesAnimatrImg}/>,
        tags: ["Godot", "Python", "Photoshop", "Krita"]
    }

    
];

export default function ProjectShowcase() {
    return (
        // <div>
            
        // </div>
        <div className="min-h-[100vh] border-t gap-3 flex flex-col border-custom-teal-50/50  items-center p-2">
            <h1 className="text-3xl font-bold">Things I’ve Built</h1>
            <h2 className="text-lg font-medium text-custom-teal-50/70 pb-5">A mix of projects that challenge and inspire me</h2>
            {
                projects.map((project: ProjectCardProps) => {
                    return <ProjectCard project={project} key={project.id}></ProjectCard>
                })
            }
        </div>
    )
}