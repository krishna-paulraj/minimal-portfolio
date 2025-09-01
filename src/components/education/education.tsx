import {
    BriefcaseBusinessIcon,
    ChevronsDownUpIcon,
    ChevronsUpDownIcon,
    CodeXmlIcon,
    DraftingCompassIcon,
    GraduationCapIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Markdown } from "@/components/markdown";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import playClick from "@/lib/sound-manager";

const iconMap = {
    code: CodeXmlIcon,
    design: DraftingCompassIcon,
    business: BriefcaseBusinessIcon,
    education: GraduationCapIcon,
} as const;

/**
 * Represents the valid keys of the `iconMap` object, used to specify the type of icon
 * associated with an education item.
 */
export type EducationItemIconType = keyof typeof iconMap;

export type EducationItemType = {
    /** Unique identifier for the education item */
    id: string;
    /** The degree or certification name */
    title: string;
    /** The period during which the education was pursued (e.g., "2020 - 2024") */
    period: string;
    /** The type of education (e.g., "Bachelor's", "Master's", "Certificate") */
    type?: string;
    /** A brief description of the education or achievements */
    description?: string;
    /** An icon representing the education item */
    icon?: EducationItemIconType;
    /** A list of subjects or skills learned */
    subjects?: string[];
    /** Indicates if the education details are expanded in the UI */
    isExpanded?: boolean;
};

export type EducationInstitutionType = {
    /** Unique identifier for the institution */
    id: string;
    /** Name of the educational institution */
    institutionName: string;
    /** URL or path to the institution's logo image */
    institutionLogo?: string;
    /** List of education items from this institution */
    educationItems: EducationItemType[];
    /** Indicates if this is the user's current institution */
    isCurrentInstitution?: boolean;
};

export function Education({
    className,
    institutions,
}: {
    className?: string;
    institutions: EducationInstitutionType[];
}) {
    return (
        <div className={cn("bg-background px-4", className)}>
            {institutions.map((institution) => (
                <EducationInstitution key={institution.id} institution={institution} />
            ))}
        </div>
    );
}

export function EducationInstitution({
    institution,
}: {
    institution: EducationInstitutionType;
}) {
    return (
        <div className="space-y-4 py-4">
            <div className="not-prose flex items-center gap-3">
                <div
                    className="flex size-6 shrink-0 items-center justify-center"
                    aria-hidden
                >
                    {institution.institutionLogo ? (
                        <Image
                            src={institution.institutionLogo}
                            alt={institution.institutionName}
                            height={24}
                            width={24}
                            className="rounded-full"
                            unoptimized
                        />
                    ) : (
                        <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    )}
                </div>

                <h3 className="text-lg leading-snug font-medium">
                    {institution.institutionName}
                </h3>

                {institution.isCurrentInstitution && (
                    <span className="relative flex items-center justify-center">
                        <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                        <span className="relative inline-flex size-2 rounded-full bg-info" />
                        <span className="sr-only">Current Institution</span>
                    </span>
                )}
            </div>

            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-slate-200">
                {institution.educationItems.map((education) => (
                    <EducationItem key={education.id} education={education} />
                ))}
            </div>
        </div>
    );
}

export function EducationItem({
    education,
}: {
    education: EducationItemType;
}) {
    const EducationIcon = iconMap[education.icon || "education"];
    return (
        <Collapsible defaultOpen={education.isExpanded} asChild>
            <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
                <CollapsibleTrigger onClick={() => playClick.playClick()} className="group/education not-prose block w-full text-left select-none">
                    <div className="relative z-1 mb-1 flex items-center gap-3 bg-background">
                        <div
                            className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
                            aria-hidden
                        >
                            <EducationIcon className="size-4" />
                        </div>

                        <h4 className="flex-1 text-base font-medium text-balance">
                            {education.title}
                        </h4>

                        <div
                            className="shrink-0 text-muted-foreground [&_svg]:size-4"
                            aria-hidden
                        >
                            <ChevronsDownUpIcon className="hidden group-data-[state=open]/education:block" />
                            <ChevronsUpDownIcon className="hidden group-data-[state=closed]/education:block" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                        {education.type && (
                            <>
                                <dl>
                                    <dt className="sr-only">Education Type</dt>
                                    <dd className="text-sm text-gray-500 italic">{education.type}</dd>
                                </dl>

                                <Separator
                                    className="h-4 w-px bg-gray-400"
                                    orientation="vertical"
                                />
                            </>
                        )}

                        <dl>
                            <dt className="sr-only">Education Period</dt>
                            <dd className="text-sm text-gray-500 italic">{education.period}</dd>
                        </dl>
                    </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    {education.description && (
                        <div className="pt-2 pl-9">
                            <Prose className="text-sm text-gray-600 dark:text-gray-400">
                                <Markdown>{education.description}</Markdown>
                            </Prose>
                        </div>
                    )}

                    {Array.isArray(education.subjects) && education.subjects.length > 0 && (
                        <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
                            {education.subjects.map((subject, index) => (
                                <li key={index} className="flex">
                                    <Subject>{subject}</Subject>
                                </li>
                            ))}
                        </ul>
                    )}
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "prose prose-sm max-w-none text-muted-foreground prose-zinc dark:prose-invert",
                "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
                "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
                "prose-ul:my-0 prose-li:my-0 prose-p:my-0",
                "prose-ul:list-disc prose-ul:pl-4",
                className
            )}
            {...props}
        />
    );
}

function Subject({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            className={cn(
                "mb-1 mr-1 rounded-md bg-gray-50 px-1 text-xs italic leading-5 text-gray-700",
                className
            )}
            {...props}
        />
    );
}
