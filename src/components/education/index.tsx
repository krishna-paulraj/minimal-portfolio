import type { EducationInstitutionType } from "./education";
import { Education } from "./education";
import HighlightedHeading from "../HighlightedHeading";

const EDUCATION_DATA: EducationInstitutionType[] = [
    {
        id: "1",
        institutionName: "Suman Ramesh Tulsiani",
        isCurrentInstitution: false,
        educationItems: [
            {
                id: "1-1",
                title: "Bachelor of Computer Science",
                period: "2021 - 2025",
                type: "Bachelor's Degree",
                description: `- Graduated with First Class Honours
- Specialized in Software Engineering and Artificial Intelligence
- Completed final year project on [Decentralized Funding System](https://github.com/krishna-paulraj/crowd-fd) using Solidity and Next.js
- Active member of the College Innovation Club
- Participated in multiple hackathons and coding competitions
- Secured 1st position in [Kimo.ai](https://www.linkedin.com/company/kimo-ai/) tech competition with 15k in cash prize`,
                icon: "education",
                subjects: ["Computer Science", "Software Engineering", "AI/ML", "Data Structures", "Algorithms"],
                isExpanded: true,
            },
        ],
    },
    {
        id: "2",
        institutionName: "D.Y. Patil University",
        isCurrentInstitution: false,
        educationItems: [
            {
                id: "2-1",
                title: "High School",
                period: "2019 - 2021",
                type: "Science",
                description: `- Completed comprehensive Science course
- Learned modern Science technologies and best practices
- Gained hands-on experience with Science`,
                icon: "education",
                subjects: ["Physics", "Chemistry", "Mathematics", "Information Technology"],
                isExpanded: false,
            },
        ],
    },
];

const EducationComponent = () => {
    return (
        <div className="mt-5 border-t pt-5">
            <h1 className="text-3xl font-bold tracking-tight">Education</h1>
            <HighlightedHeading className="my-4">
                My academic journey
            </HighlightedHeading>
            <Education institutions={EDUCATION_DATA} />
        </div>
    );
};

export { EducationComponent as default };
