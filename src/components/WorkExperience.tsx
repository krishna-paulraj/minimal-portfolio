import type { ExperienceItemType } from "@/components/work-experience";
import { WorkExperience } from "@/components/work-experience";
import HighlightedHeading from "./HighlightedHeading";
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
                description: `- Develop [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
- Develop [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
- Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
- Develop interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement robust frontend solutions for web and mobile platforms.
- Analyze technical capabilitis and provide optimal solutions.`,
                icon: "code",
                skills: ["Javascript", "React.js", "Next.js", "Docker"],
                isExpanded: true,
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

export default WorkExperienceComponent;