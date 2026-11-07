import { CodeXmlIcon } from "lucide-react"

import type { ExperienceItemType } from "@/registry/components/work-experience"
import { WorkExperience } from "@/registry/components/work-experience"

export default function WorkExperienceDemo() {
  return <WorkExperience className="w-full" experiences={WORK_EXPERIENCE} />
}

// Demo data only. Replace it with your own experience.
const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "northwind",
    companyName: "Northwind",
    companyLogo: "/images/company-placeholder.svg",
    companyWebsite: "https://northwind.example",
    positions: [
      {
        id: "1",
        title: "WordPress Developer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Build and maintain custom WordPress themes and plugins.\n- Develop WooCommerce stores with tailored checkout and payment flows.\n- Improve Core Web Vitals and accessibility across client sites.",
        skills: ["WordPress", "WooCommerce", "PHP", "MySQL", "Elementor"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
