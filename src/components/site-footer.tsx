import { FluidGradientText } from "@/components/fluid-gradient-text"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2 pb-24 sm:pb-16">
      <div className="screen-line-top mx-auto border-x border-x-line md:max-w-3xl">
        <div className="relative w-full text-foreground">
          <div className="pointer-events-none absolute inset-x-0 top-2 z-1 text-center text-xs text-muted-foreground select-none">
            <span className="hidden pointer-fine:inline-block">
              Move your cursor within the text below
            </span>
            <span className="hidden pointer-coarse:inline-block">
              Press anywhere within the text below
            </span>
          </div>

          <FluidGradientText text="Anuj Singh" />
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
