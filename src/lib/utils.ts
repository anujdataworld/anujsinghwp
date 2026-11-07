export { cn } from "cn"

export function absoluteUrl(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://anujsinghwp.netlify.app"
  return `${baseUrl}${path}`
}
