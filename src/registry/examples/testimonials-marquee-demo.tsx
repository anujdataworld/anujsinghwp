import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/registry/components/testimonial"

export default function TestimonialsMarqueeDemo() {
  return (
    <div className="w-full bg-background">
      <Marquee
        data-slot="marquee"
        className="border-y border-line [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
      >
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent>
          {TESTIMONIALS.map((item) => (
            <MarqueeItem
              key={item.url}
              className="mx-0 h-full w-xs border-r border-line"
            >
              <a
                className="block h-full transition-[background-color] ease-out hover:bg-accent/20"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Testimonial>
                  <TestimonialQuote className="font-serif">
                    <p>{item.quote}</p>
                  </TestimonialQuote>

                  <TestimonialAuthor>
                    <TestimonialAvatar>
                      <TestimonialAvatarImg src={item.authorAvatar} />
                      <TestimonialAvatarRing />
                    </TestimonialAvatar>

                    <TestimonialAuthorName>
                      {item.authorName}
                    </TestimonialAuthorName>

                    <TestimonialAuthorTagline>
                      {item.authorTagline}
                    </TestimonialAuthorTagline>
                  </TestimonialAuthor>
                </Testimonial>
              </a>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  )
}

// Demo avatars only. Replace them with your own URLs.
const TESTIMONIALS = [
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Priya Sharma",
    authorTagline: "Frontend Engineer at Northwind",
    url: "https://example.com/testimonial/1",
    quote:
      "One of the cleanest component libraries I have used. Everything just works.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Daniel Kim",
    authorTagline: "Design Engineer",
    url: "https://example.com/testimonial/2",
    quote:
      "The attention to detail is unreal. Installing it took minutes and it fit right in.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Sofia Alvarez",
    authorTagline: "Creator of Pixelforge",
    url: "https://example.com/testimonial/3",
    quote:
      "Great docs and great components. It is clear a lot of care went into this.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Ethan Brooks",
    authorTagline: "Developer Advocate",
    url: "https://example.com/testimonial/4",
    quote: "The registry saved me days of work on my last project.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Maya Patel",
    authorTagline: "Product Designer",
    url: "https://example.com/testimonial/5",
    quote:
      "Really nice work. The components feel native to the design system.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Lucas Meyer",
    authorTagline: "Engineering Lead",
    url: "https://example.com/testimonial/6",
    quote: "Simple, clean and well documented. Exactly what I was looking for.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Hannah Cole",
    authorTagline: "Software Engineer",
    url: "https://example.com/testimonial/7",
    quote: "This is now my default starting point for new projects.",
  },
]
