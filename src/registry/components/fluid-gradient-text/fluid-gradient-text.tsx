"use client"

import { useId } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export type FluidGradientTextProps = {
  /** Text content rendered inside the SVG. */
  text: string
  /**
   * SVG viewBox width used to scale the gradient and text layout.
   * @default 1200
   * */
  svgViewBoxWidth?: number
  /**
   * SVG viewBox height used as the base text size.
   * @default 300
   * */
  svgViewBoxHeight?: number
  className?: string
}

export function FluidGradientText({
  text,
  svgViewBoxWidth,
  svgViewBoxHeight = 300,
  className,
}: FluidGradientTextProps) {
  const generatedId = useId()
  const gradientId = `fluid_gradient_text_linear_${generatedId.replace(/:/g, "")}`

  const resolvedSvgViewBoxWidth =
    svgViewBoxWidth ??
    Math.max(1200, Math.round(text.length * (svgViewBoxHeight * 0.6)))

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, resolvedSvgViewBoxWidth]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const containerRect = event.currentTarget.getBoundingClientRect()
    if (containerRect.width > 0) {
      gradientX1Raw.set(
        (event.clientX - containerRect.left) / containerRect.width
      )
    }
  }

  const handlePointerLeave = () => {
    gradientX1Raw.set(0.5)
  }

  return (
    <div
      className={cn(
        "relative size-full overflow-hidden after:absolute after:bottom-0 after:h-px after:w-full after:bg-current/15",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        className="size-full translate-y-[37.5%] select-none"
        viewBox={`0 0 ${resolvedSvgViewBoxWidth} ${svgViewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill={`url(#${gradientId})`}
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: svgViewBoxHeight,
            fontWeight: "bold",
          }}
        >
          {text}
        </text>
        <defs>
          <motion.linearGradient
            id={gradientId}
            x1={gradientX1}
            y1="0"
            x2={resolvedSvgViewBoxWidth / 2}
            y2={svgViewBoxHeight}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.625" stopColor="currentColor" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}
