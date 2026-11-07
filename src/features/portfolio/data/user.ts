import type { User } from "@/features/portfolio/types/user"

const PROFILE_IMAGE = "/images/anuj-profile.jpg"

export const USER: User = {
  firstName: "Anuj",
  lastName: "Singh",
  displayName: "Anuj Singh",
  username: "anujdataworld",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  taglines: [
    "WordPress Developer.",
    "WordPress CMS, WooCommerce, Elementor",
    "Open source contributor.",
    "I Build Scalable Web & Mobile Applications.",
  ],
  address: "Prayagraj, Uttar Pradesh, India",
  phoneNumberB64: "KzkxODcwNzgxNTQ1OQ==", // E.164 format, base64 encoded
  emailB64: "YW51amludGVjaEBnbWFpbC5jb20=", // base64 encoded
  jobTitle: "WordPress Developer",
  jobs: [
    {
      title: "WordPress Developer",
      company: "Freelance",
      website: "#",
      experienceId: "freelance",
    },
  ],
  about: `- I’m Anuj Singh (call me Anuj) — a WordPress Developer with 3+ years of experience, known for pixel-perfect execution and obsessive attention to detail.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.
- I build scalable web and mobile applications.
`,
  avatar: PROFILE_IMAGE,
  avatarOutline: PROFILE_IMAGE,
  avatarMonochrome: PROFILE_IMAGE,
  avatarVariants: {
    lightOff: PROFILE_IMAGE,
    lightOn: PROFILE_IMAGE,
    darkOff: PROFILE_IMAGE,
    darkOn: PROFILE_IMAGE,
  },
  ogImage: "/images/og.png",
  timeZone: "Asia/Kolkata",
  keywords: [
    "anuj singh",
    "anuj",
    "anuj singh web developer",
    "anuj wordpress developer",
  ],
  dateCreated: "2026-11-6", // YYYY-MM-DD
}
