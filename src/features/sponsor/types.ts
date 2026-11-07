import type { ComponentType, SVGProps } from "react"

export type SponsorTier = "silver" | "gold" | "platinum" | "backer" | string

export type Sponsor = {
  name: string
  url: string
  tier: SponsorTier
  logo: ComponentType<SVGProps<SVGSVGElement>>
}

export const PAID_TIERS: Set<string> = new Set([
  "silver",
  "gold",
  "platinum",
  "backer",
])
