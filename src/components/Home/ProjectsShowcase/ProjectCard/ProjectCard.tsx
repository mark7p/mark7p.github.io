
export type ProjectCardProps = {
    title: string;
    id: number,
    image: JSX.Element;
    description: string;
    link: string;
    tags: string[];
}


export default function ProjectCard({project}: { project: ProjectCardProps }) {
    return (
        <div className="project-card flex gap-5 p-5 rounded-lg hover:text-custom-teal-100 hover:bg-custom-teal-300/20 mb-3 hover:cursor-pointer select-none">
            <div className="project-image rounded overflow-hidden min-w-[10rem] max-w-[20rem]">
                {project.image}
            </div>
            <div className="project-info text-left min-w-[20rem] max-w-[30rem]">
                <h2 className="text-xl pb-2 font-bold">{project.title}</h2>
                <p className="text-md text-custom-teal-50/70">{project.description}</p>
                <div className="tags-container flex gap-2 pt-3">
                    {project.tags.map((tag: string, i: number) => {
                        return <span className="tag rounded-full p-2 text-custom-teal-100 bg-custom-teal-200/20 text-sm" key={i}>{tag}</span>
                    })}
                </div>
            </div>
        </div>
    )
}