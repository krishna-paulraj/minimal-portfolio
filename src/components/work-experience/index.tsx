import type { ExperienceItemType } from "./work-experience";
import { WorkExperience } from "./work-experience";
import HighlightedHeading from "../HighlightedHeading";
import blocsys from "@/assets/blocsys-logo.png";

const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
        id: "1",
        companyName: "Blocsys",
        companyLogo: blocsys.src,
        isCurrentEmployer: true,
        positions: [
            {
                id: "1-1",
                title: "Software Engineer",
                employmentPeriod: "Jun 2025 - Present",
                employmentType: "Full-time",
                description: `
- Build and optimize core features to improve functionality and user experience.
- Maintain design consistency and ensure adherence to UI/UX best practices.
- Implement scalable and robust frontend solutions for both web and mobile platforms.
- Conduct technical analysis to identify and deliver optimal solutions.`,
                icon: "code",
                skills: ["Typescript", "React.js", "Next.js", "LangChain"],
                isExpanded: true,

            },
            {
                id: "1-2",
                title: "Software Developer Intern",
                employmentPeriod: "Jun 2025 - Jul 2025",
                employmentType: "Full-time",
                description: `
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement robust frontend solutions for web and mobile platforms.
- Analyze technical capabilitis and provide optimal solutions.`,
                icon: "design",
                skills: ["Javascript", "React.js", "Next.js"],
                isExpanded: false,
            },
        ],
    },

];

const WorkExperienceComponent = () => {
    return (
        <div className="mt-5 border-t pt-5">
            <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
            <HighlightedHeading className="my-4">
                Where I've been working
            </HighlightedHeading>
            <WorkExperience experiences={WORK_EXPERIENCE} />
        </div>
    );
};

export { WorkExperienceComponent as default };
