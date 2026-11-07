import Markdown from "react-markdown"

import {
  TimescaleAge,
  TimescaleContent,
  TimescaleHeader,
  TimescaleIntroScroll,
  TimescaleItem,
  TimescaleRail,
  TimescaleRoot,
  TimescaleTick,
  TimescaleTrack,
  TimescaleViewport,
  TimescaleYear,
} from "@/registry/components/timescale"

export default function TimescaleDemo() {
  return (
    <TimescaleIntroScroll>
      <TimescaleRoot className="mt-4">
        <TimescaleHeader>
          <TimescaleAge>Age</TimescaleAge>
          <TimescaleYear>Years</TimescaleYear>
        </TimescaleHeader>

        <TimescaleViewport>
          <TimescaleTrack>
            <TimescaleRail />

            {MILESTONES.map((milestone) => (
              <TimescaleItem key={milestone.year}>
                <TimescaleTick />

                <TimescaleAge>{milestone.year - BIRTH_YEAR}</TimescaleAge>
                <TimescaleYear>{milestone.year}</TimescaleYear>

                {milestone.content && (
                  <TimescaleContent className="typeset typeset-timescale">
                    <Markdown>{milestone.content}</Markdown>
                  </TimescaleContent>
                )}
              </TimescaleItem>
            ))}
          </TimescaleTrack>
        </TimescaleViewport>
      </TimescaleRoot>
    </TimescaleIntroScroll>
  )
}

const BIRTH_YEAR = 2000

type Milestone = {
  year: number
  content?: string
}

const MILESTONES: Milestone[] = [
  { year: 2000, content: "Born in Prayagraj, Uttar Pradesh, India." },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  {
    year: 2018,
    content: "Started learning web development and built my first website.",
  },
  { year: 2019 },
  { year: 2020 },
  {
    year: 2021,
    content: "Started building WordPress sites for clients.",
  },
  { year: 2022 },
  {
    year: 2023,
    content: "Became a freelance WordPress developer.",
  },
  { year: 2024 },
  { year: 2025 },
  {
    year: 2026,
    content: "Launched this portfolio and component registry.",
  },
]
