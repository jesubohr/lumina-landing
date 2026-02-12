import { useEffect, useState } from "react"
import { Shader, SolidColor, Swirl, FilmGrain, WaveDistortion, Dither } from "shaders/react"

export default function ShaderBackground() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "light"
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light")
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return (
    <Shader className="masked-shader absolute inset-0 z-0">
      {theme === "light" ? (
        <>
          <Swirl colorA="#fefaff" colorB="#b58af1" colorSpace="oklch" detail={1.8} speed={0.5} />
          <WaveDistortion angle={133} edges="mirror" frequency={1.6} speed={1.5} strength={0.2} visible={true} />
          <FilmGrain strength={0.45} />
          <Dither colorMode="source" pattern="bayer2" pixelSize={2} threshold={0.6} spread={0.7} opacity={0.2} />
        </>
      ) : (
        <>
          <SolidColor color="#1a1625" />
          <Swirl colorA="#6545ad" colorB="#3c1e72" colorSpace="oklch" detail={1.8} speed={0.5} opacity={0.6} />
          <FilmGrain strength={0.1} />
          <Dither colorMode="source" pattern="bayer2" pixelSize={2} threshold={0.6} spread={0.7} opacity={0.2} />
        </>
      )}
    </Shader>
  )
}
