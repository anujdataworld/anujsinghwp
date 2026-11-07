"use client"

import * as React from "react"
import { useState } from "react"
import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import {
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/toast"
import { LinkedInIcon } from "@/components/icons"

const CONTACT_INFO = {
  phone: {
    label: "Phone",
    display: "+91 87078 15459",
    raw: "+918707815459",
    href: "tel:+918707815459",
    actionLabel: "Call",
  },
  email: {
    label: "Email",
    display: "anujintech@gmail.com",
    raw: "anujintech@gmail.com",
    href: "mailto:anujintech@gmail.com",
    actionLabel: "Email",
  },
  linkedin: {
    label: "LinkedIn",
    display: "linkedin.com/in/anujdataworld",
    raw: "https://www.linkedin.com/in/anujdataworld",
    href: "https://www.linkedin.com/in/anujdataworld",
    actionLabel: "Connect",
  },
}

export function ContactChannels() {
  const { success: tiksSuccess } = useTiks()
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = async (text: string, key: string, label: string) => {
    const ok = await copyText(text)
    if (ok) {
      setCopiedKey(key)
      tiksSuccess()
      toast.add({
        type: "success",
        title: `${label} copied to clipboard`,
      })
      setTimeout(() => setCopiedKey(null), 2000)
    }
  }

  return (
    <div className="space-y-6 px-4 py-8">
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Phone */}
        <Card size="sm" className="relative flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground">
              <PhoneIcon className="size-4 text-foreground" />
              <CardTitle className="text-sm font-medium">
                {CONTACT_INFO.phone.label}
              </CardTitle>
            </div>
            <CardDescription className="pt-2 font-mono text-sm font-medium text-foreground">
              {CONTACT_INFO.phone.display}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-2 pt-0">
            <Button
              variant="outline"
              size="xs"
              className="flex-1"
              nativeButton={false}
              render={<a href={CONTACT_INFO.phone.href} />}
            >
              {CONTACT_INFO.phone.actionLabel}
            </Button>
            <Button
              variant="ghost"
              size="xs"
              onClick={() =>
                handleCopy(
                  CONTACT_INFO.phone.display,
                  "phone",
                  "Phone number"
                )
              }
              aria-label="Copy phone number"
            >
              {copiedKey === "phone" ? (
                <CheckIcon className="size-3.5 text-emerald-500" />
              ) : (
                <CopyIcon className="size-3.5" />
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Email */}
        <Card size="sm" className="relative flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MailIcon className="size-4 text-foreground" />
              <CardTitle className="text-sm font-medium">
                {CONTACT_INFO.email.label}
              </CardTitle>
            </div>
            <CardDescription className="truncate pt-2 font-mono text-sm font-medium text-foreground">
              {CONTACT_INFO.email.display}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-2 pt-0">
            <Button
              variant="outline"
              size="xs"
              className="flex-1"
              nativeButton={false}
              render={<a href={CONTACT_INFO.email.href} />}
            >
              {CONTACT_INFO.email.actionLabel}
            </Button>
            <Button
              variant="ghost"
              size="xs"
              onClick={() =>
                handleCopy(
                  CONTACT_INFO.email.display,
                  "email",
                  "Email address"
                )
              }
              aria-label="Copy email address"
            >
              {copiedKey === "email" ? (
                <CheckIcon className="size-3.5 text-emerald-500" />
              ) : (
                <CopyIcon className="size-3.5" />
              )}
            </Button>
          </CardContent>
        </Card>

        {/* LinkedIn */}
        <Card size="sm" className="relative flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground">
              <LinkedInIcon className="size-4 text-foreground" />
              <CardTitle className="text-sm font-medium">
                {CONTACT_INFO.linkedin.label}
              </CardTitle>
            </div>
            <CardDescription className="truncate pt-2 text-sm font-medium text-foreground">
              {CONTACT_INFO.linkedin.display}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-2 pt-0">
            <Button
              variant="outline"
              size="xs"
              className="flex-1 gap-1"
              nativeButton={false}
              render={
                <a
                  href={CONTACT_INFO.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {CONTACT_INFO.linkedin.actionLabel}
              <ExternalLinkIcon className="size-3" />
            </Button>
            <Button
              variant="ghost"
              size="xs"
              onClick={() =>
                handleCopy(
                  CONTACT_INFO.linkedin.raw,
                  "linkedin",
                  "LinkedIn profile link"
                )
              }
              aria-label="Copy LinkedIn profile link"
            >
              {copiedKey === "linkedin" ? (
                 <CheckIcon className="size-3.5 text-emerald-500" />
              ) : (
                <CopyIcon className="size-3.5" />
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="screen-line-top screen-line-bottom p-4 text-center text-xs text-muted-foreground">
        Available for freelance WordPress projects, theme development, and WooCommerce customizations.
      </div>
    </div>
  )
}
