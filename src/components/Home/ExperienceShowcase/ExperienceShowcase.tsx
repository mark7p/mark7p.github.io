import { useState } from "react";
import ExperienceCard, {
  ExperienceCardProps,
} from "./ExperienceCard/ExperienceCard";

const experiences: ExperienceCardProps[] = [
    
  // {
  //   id: 2,
  //   title: "Web Developer",
  //   company: "NineDev",
  //   dateStarted: "Jan 2021",
  //   dateEnded: "Apr 2021",
  //   jobType: "Part-Time",
  //   jobLocation: "Remote",
  //   description:
  //     "Developed, maintained, and shipped production code for client websites.",
  //   tags: ["React", "Vue", "Javascript", "Typescript", "CSS"],
  // },
  // {
  //   id: 1,
  //   title: "Angular Developer",
  //   company: "Braid",
  //   jobType: "Full-Time",
  //   jobLocation: "Remote",
  //   dateStarted: "Oct 2019",
  //   dateEnded: "Dec 2020",
  //   description:
  //     "Collaborated with cross-functional teams to deliver high-quality SaaS solutions and designed reusable Angular components for multi-tenant architecture.",
  //   tags: ["Angular", "RXJS", "Redux", "Typescript", "SCSS"],
  //   link: "https://braid.co/",
  // },
  {
    id: 4,
    title: "Opensource Contributor",
    company: "PrimeNg - Angular UI Library",
    dateStarted: "2024",
    dateEnded: "2025",
    jobType: "Part-Time",
    jobLocation: "Remote",
    description:
      "Resolved Angular component bugs and implemented fixes in the source code to enhance the functionality and stability of the library.",
    tags: ["Angular", "Javascript", "Typescript", "CSS"],
  },
  {
    id: 5,
    title: "Audio and Video Editor",
    company: "Self-Employed",
    dateStarted: "Oct 2019",
    dateEnded: "Dec 2025",
    jobType: "Freelance",
    jobLocation: "Remote",
    description:
      "Produced high quality video and audio.",
    tags: ["Audio Production", "Video Production"],
  },
  {
    id: 3,
    title: "Equipment Technician",
    company: "Analog Devices Inc",
    dateStarted: "May 2015",
    dateEnded: "Sep 2019",
    jobType: "Full-Time",
    jobLocation: "On-Site",
    description:
      "Diagnosed and repaired semiconductor testing machinery, minimizing downtime, and collaborated with development teams to implement machine improvements.",
    tags: ["Technical Drawing", "Electrical Wiring", "Equipment Maintenance" , "Machine Design"],
    link: "https://www.analog.com/",
  },
];

export default function ExperienceShowcase() {
    const [limit, setLimit] = useState(2)
    const showMore = () => {
        setLimit(experiences.length);
    }
  return (
    <div className="border-t gap-3 flex flex-col border-custom-teal-50/50  items-center p-5 pb-20">
      <h1 className="text-3xl font-bold">My Experience</h1>
      <h2 className="text-lg font-medium text-custom-teal-50/70 pb-5">
        Here are some of the companies I have worked with
      </h2>
      <div className="flex flex-col gap-3">
        {experiences.slice(0, limit).map((experience: ExperienceCardProps) => {
          return <ExperienceCard experience={experience} key={experience.id} />;
        })}
      </div>
      {/* Show More Button if possible */}
      {experiences.length > limit && (
        <button className="text-custom-teal-50/70 hover:text-custom-teal-50 hover:bg-custom-teal-300/20 hover:cursor-pointer select-none p-2 rounded-lg"
        onClick={showMore}>
          Show More
        </button>
      )}
    </div>
  );
}
