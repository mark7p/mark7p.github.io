
export type ProjectCardProps = {
    title: string;
    id: number,
    image: JSX.Element;
    description: string;
    link?: string;
    tags: string[];
}


export default function ProjectCard({project}: { project: ProjectCardProps }) {
    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (project.link) {
            event.preventDefault();
            window.open(project.link, "_blank", "noopener noreferrer");
        }
      };
    return (
        <div onClick={handleClick} className="project-card flex gap-5 p-5 rounded-lg  hover:text-custom-teal-100 hover:bg-custom-teal-300/20 mb-3 hover:cursor-pointer select-none flex-wrap">
            <div className="project-image flex rounded overflow-hidden w-full h-min min-w-[8rem] max-w-[20rem]">
                {project.image}
            </div>
            <div className="flex flex-col project-info text-left min-w-[12rem] max-w-[30rem]"> 
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl pb-2 font-bold" >{project.title}</a>
                <p className="text-md w-full text-custom-teal-50/70 text-balance">{project.description}</p>
                <div className="tags-container flex gap-2 pt-3 flex-wrap">
                    {project.tags.map((tag: string, i: number) => {
                        return <span className="tag rounded-full py-1 px-2 whitespace-nowrap text-custom-teal-100 bg-custom-teal-200/20 text-sm" key={i}>{tag}</span>
                    })}
                </div>
            </div>
        </div>
    )
}