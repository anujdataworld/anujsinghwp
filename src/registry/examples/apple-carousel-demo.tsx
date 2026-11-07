import {
  AppleCarouselContent,
  AppleCarouselControls,
  AppleCarouselItem,
  AppleCarouselPlayButton,
  AppleCarouselRoot,
  AppleCarouselTab,
  AppleCarouselTabList,
} from "@/registry/components/apple-carousel"

export default function AppleCarouselDemo() {
  return (
    <AppleCarouselRoot duration={3600}>
      <AppleCarouselContent>
        {ITEMS.map((item) => (
          // The link is the panel's first focusable element, so the panel
          // itself leaves the tab order.
          <AppleCarouselItem
            key={item.image}
            tabIndex={-1}
            className="@max-3xl:h-96"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block size-full rounded-[inherit] select-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </a>
          </AppleCarouselItem>
        ))}
      </AppleCarouselContent>

      <AppleCarouselControls>
        <AppleCarouselTabList aria-label="Places in India">
          {ITEMS.map((item) => (
            <AppleCarouselTab key={item.image}>{item.title}</AppleCarouselTab>
          ))}
        </AppleCarouselTabList>
        <AppleCarouselPlayButton />
      </AppleCarouselControls>
    </AppleCarouselRoot>
  )
}

const ITEMS = [
  {
    title: "Quang Ninh",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/Quảng_Ninh_province",
  },
  {
    title: "An Giang",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/An_Giang_province",
  },
  {
    title: "Ninh Binh",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/Ninh_Bình_province",
  },
  {
    title: "Hue",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/Huế",
  },
  {
    title: "Ninh Binh",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/Ninh_Bình_province",
  },
  {
    title: "Prayagraj",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City",
  },
  {
    title: "Da Nang",
    image:
      "/images/placeholder.svg",
    href: "https://en.wikipedia.org/wiki/Da_Nang",
  },
]
