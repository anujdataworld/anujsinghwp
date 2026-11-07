import { GlowCard, GlowCardGrid } from "@/registry/components/glow-card-grid"

export default function GlowCardGridDemo() {
  return (
    <div className="w-full p-4">
      <GlowCardGrid>
        {CARDS.map((card) => (
          <GlowCard
            key={card.name}
            name={card.name}
            handle={card.handle}
            avatar={card.avatar}
          />
        ))}
      </GlowCardGrid>
    </div>
  )
}

// Demo avatars only. Replace them with your own URLs.
const CARDS = [
  {
    name: "Ava Chen",
    handle: "@avachen",
    avatar: "/images/avatar-placeholder.svg",
  },
  {
    name: "Marcus Reed",
    handle: "@marcusreed",
    avatar: "/images/avatar-placeholder.svg",
  },
  {
    name: "Priya Sharma",
    handle: "@priyasharma",
    avatar: "/images/avatar-placeholder.svg",
  },
  {
    name: "Daniel Kim",
    handle: "@danielkim",
    avatar: "/images/avatar-placeholder.svg",
  },
  {
    name: "Sofia Alvarez",
    handle: "@sofiaalvarez",
    avatar: "/images/avatar-placeholder.svg",
  },
  {
    name: "Noah Williams",
    handle: "@noahwilliams",
    avatar: "/images/avatar-placeholder.svg",
  },
]
