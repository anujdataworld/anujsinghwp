import { CodeIcon, PaintbrushIcon, RocketIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    companyIcon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    location: "Prayagraj, India",
    locationType: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "freelance-wp-dev",
        title: "WordPress Developer",
        employmentType: "Freelance",
        employmentPeriod: {
          start: "01.2023",
        },
        icon: <CodeIcon />,
        isExpanded: true,
        description: `- Build custom WordPress themes and plugins for small-business clients.
- Develop WooCommerce storefronts with payment gateway integration.
- Create responsive landing pages using Elementor and Gutenberg.
- Optimize site speed, SEO, and Core Web Vitals scores.
- Provide ongoing maintenance, security updates, and hosting support.`,
        skills: [
          "WordPress",
          "WooCommerce",
          "Elementor",
          "PHP",
          "JavaScript",
          "ACF",
          "cPanel",
          "SEO",
        ],
      },
    ],
  },
  {
    id: "developer-hub",
    companyName: "Developer Hub Agency",
    companyWebsite: "https://example.com",
    location: "New Delhi, India",
    locationType: "Remote",
    positions: [
      {
        id: "developer-hub-wp-dev",
        title: "Junior WordPress Developer",
        employmentType: "Full-time",
        employmentPeriod: {
          start: "06.2022",
          end: "12.2022",
        },
        icon: <CodeIcon />,
        description: `- Maintained and updated 10+ client WordPress sites.
- Built custom page templates and shortcodes using PHP.
- Integrated third-party APIs for contact forms and analytics.
- Collaborated with designers to convert Figma mockups into pixel-perfect themes.`,
        skills: [
          "WordPress",
          "PHP",
          "HTML5/CSS3",
          "JavaScript",
          "Figma",
          "Git",
        ],
      },
      {
        id: "developer-hub-intern",
        title: "Web Development Intern",
        employmentType: "Internship",
        employmentPeriod: {
          start: "01.2022",
          end: "05.2022",
        },
        icon: <RocketIcon />,
        skills: [
          "HTML5/CSS3",
          "JavaScript",
          "WordPress",
          "Responsive Design",
        ],
      },
    ],
  },
  {
    id: "creative-studio",
    companyName: "Creative Studio",
    companyWebsite: "https://example.com",
    location: "Prayagraj, India",
    locationType: "On-site",
    positions: [
      {
        id: "creative-studio-designer",
        title: "Web Designer",
        employmentType: "Part-time",
        employmentPeriod: {
          start: "2021",
          end: "2022",
        },
        icon: <PaintbrushIcon />,
        skills: [
          "UI/UX Design",
          "Figma",
          "Adobe Photoshop",
          "WordPress",
          "Elementor",
        ],
      },
    ],
  },
]
