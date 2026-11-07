import {
  ClaudeIcon,
  GoogleIcon,
  MetaIcon,
  MicrosoftIcon,
  VercelIcon,
} from "@/components/icons"
import type { Sponsor } from "./types"

export const SPONSORS: Sponsor[] = [
  {
    name: "Vercel",
    url: "https://vercel.com",
    tier: "platinum",
    logo: VercelIcon,
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    tier: "platinum",
    logo: ClaudeIcon,
  },
  {
    name: "Google",
    url: "https://google.com",
    tier: "gold",
    logo: GoogleIcon,
  },
  {
    name: "Meta",
    url: "https://meta.com",
    tier: "gold",
    logo: MetaIcon,
  },
  {
    name: "Microsoft",
    url: "https://microsoft.com",
    tier: "silver",
    logo: MicrosoftIcon,
  },
]
