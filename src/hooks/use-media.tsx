import { useState, useEffect } from "react"

/**
 * Custom React hook for managing media queries and responsive behavior.
 *
 * @param {string} query - The media query string to match against (e.g., "(min-width: 768px)")
 * @returns {boolean} Returns true if the media query matches, false otherwise
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useMedia('(max-width: 768px)');
 *
 *   return (
 *     <div>
 *       {isMobile ? <MobileView /> : <DesktopView />}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMedia(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Update state if the match changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Set initial value
    setMatches(mediaQuery.matches)

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}
