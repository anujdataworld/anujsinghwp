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

export default function TestimonialsMarqueeDemo2() {
  return (
    <div className="w-full space-y-4 bg-background [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!">
      {[TESTIMONIALS_1, TESTIMONIALS_2].map((list, index) => (
        <Marquee key={index} className="border-y border-line">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent direction={index % 2 === 1 ? "right" : "left"}>
            {list.map((item) => (
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
      ))}
    </div>
  )
}

// Demo avatars only. Replace them with your own URLs.
const TESTIMONIALS_1 = [
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

const TESTIMONIALS_2 = [
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Isabella Rossi",
    authorTagline: "UI Engineer",
    url: "https://example.com/testimonial/9",
    quote: "I like your style. Clean and considered without being over the top.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Omar Haddad",
    authorTagline: "Full-stack Developer",
    url: "https://example.com/testimonial/10",
    quote: "Looks great and the code is easy to follow.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Grace Lin",
    authorTagline: "Design Systems Lead",
    url: "https://example.com/testimonial/11",
    quote: "Great work on the docs and the examples.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Arjun Mehta",
    authorTagline: "Creator of Shaderlab",
    url: "https://example.com/testimonial/12",
    quote: "This registry is something else. Very well put together.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Emma Fischer",
    authorTagline: "Creator of Motionkit",
    url: "https://example.com/testimonial/13",
    quote: "Simple and clean, love it.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Liam O'Connor",
    authorTagline: "Creator of Gridly",
    url: "https://example.com/testimonial/14",
    quote: "Great work, the API is a pleasure to use.",
  },
  {
    authorAvatar: "/images/avatar-placeholder.svg",
    authorName: "Nina Petrova",
    authorTagline: "Creator of Formwise",
    url: "https://example.com/testimonial/16",
    quote: "You are doing amazing work. Keep it up.",
  },
]
