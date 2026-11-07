import type { Metadata } from "next"
import type { ContactPage as SchemaContactPage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl } from "@/lib/utils"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"

import { ContactChannels } from "./contact-channels"

const title = "Contact Me"
const description =
  "Get in touch with Anuj Singh — WordPress developer. Available for freelance projects, custom themes, WooCommerce, and technical consultation."
const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

function getContactPageJsonLd(): WithContext<SchemaContactPage> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact"),
    name: title,
    description,
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Person",
      name: "Anuj Singh",
      telephone: "+918707815459",
      email: "anujintech@gmail.com",
      url: absoluteUrl("/"),
      sameAs: [
        "https://github.com/anujdataworld",
        "https://www.linkedin.com/in/anujdataworld",
      ],
    },
    isPartOf: { "@id": JSON_LD_ID.website },
  }
}

export default function Contact() {
  return (
    <>
      <JsonLdScript data={getContactPageJsonLd()} />
      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Contact",
            href: "/contact",
          },
        ])}
      />

      <PageHeading>
        <PageHeadingTagline>Contact</PageHeadingTagline>
        <PageHeadingTitle>Contact me</PageHeadingTitle>
        <PageHeadingDescription>
          {description}
        </PageHeadingDescription>
      </PageHeading>

      <ContactChannels />
    </>
  )
}
