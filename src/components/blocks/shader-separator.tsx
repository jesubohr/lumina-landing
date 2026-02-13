import { Shader, Blob, FilmGrain, Swirl, TiltShift, WaveDistortion } from "shaders/react"

export function ShaderSeparator() {
  return (
    <Shader className="h-60 md:h-64 lg:h-80">
      <Swirl colorA="#c69fff" colorB="#562b8b" colorSpace="oklch" />
      <WaveDistortion angle={237} edges="mirror" frequency={1.4} strength={0.2} transform={{ scale: 1.3 }}>
        <WaveDistortion angle={314} edges="mirror" frequency={10} speed={0.3}>
          <Blob
            colorA="#a17ae0"
            colorB="#8058bc"
            center={{ x: 0.5, y: 0.5 }}
            deformation={1}
            highlightColor="#fee8ff"
            highlightX={0.5}
            size={1.5}
            speed={1.5}
          />
        </WaveDistortion>
      </WaveDistortion>
      <TiltShift angle={155} center={{ x: 0.5, y: 0.5 }} intensity={80} width={0.5} />
      <FilmGrain strength={0.3} />
    </Shader>
  )
}
