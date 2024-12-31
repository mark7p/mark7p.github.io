export type ExperienceCardProps = {
    id: number;
    title: string;
    company: string;
    jobType: "Part-Time" | "Full-Time" | "Contract" | "Internship";
    jobLocation: "Remote" | "On-Site" | "Hybrid";
    dateStarted: string;
    link?: string,
    dateEnded: string;
    description: string;
    tags: string[];
}

export default function ExperienceCard({experience}: { experience: ExperienceCardProps }) {
    return (
        <div className="experience-card flex gap-10 p-5 rounded-lg hover:text-custom-teal-100 hover:bg-custom-teal-300/20 mb-3 hover:cursor-pointer select-none flex-wrap">
           <div className="summary-container grid gap-1 align-top">
                <span className="text-md text-custom-teal-50/60">{experience.dateStarted} - {experience.dateEnded} <br/>
                <p className="text-xs text-right">{experience.jobType} - {experience.jobLocation}</p>
                </span>
            </div> 
            <div className="flex flex-col experience-info text-left min-w-[12rem] max-w-[30rem]">
                <h2 className="text-xl pb-2 font-bold">{experience.title}</h2>
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="text-md pb-2 font-medium text-custom-teal-50/70 hover:text-custom-teal-50">{experience.company}</a>
                <p className="text-md w-full text-custom-teal-50/70 text-balance">{experience.description}</p>
                <div className="tags-container flex gap-2 pt-3 flex-wrap">
                    {experience.tags.map((tag: string, i: number) => {
                        return <span className="tag rounded-full py-1 px-2 whitespace-nowrap text-custom-teal-100 bg-custom-teal-200/20 text-sm" key={i}>{tag}</span>
                    })}
                </div>
            </div>
        </div>
    )
}