import Galaxy from '@/components/animated/Galaxy';

import React from 'react'

export const galaxy = () => {
  return (
   <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Galaxy
        density={0.8}
        glowIntensity={0.5}
        flareIntensity={1.1}
        starSpeed={0.9}
        mouseRepulsion
        clickWarp
        starColors={["#ffffff", "#bfe3ff", "#8fb8ff"]}
        hueShift={140}
        saturation={0}
        starSize={1}
        twinkleIntensity={0.55}
        speed={1.1}
        rotationSpeed={0.12}
        layers={5}
        direction="forward"
        repulsionStrength={2}
        mouseInteraction
        intro
        lightMode={false} backgroundColor={undefined} dpr={undefined} style={undefined}/>
</div>
  )
}
