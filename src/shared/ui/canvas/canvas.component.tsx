'use client';

import { ARButton, Controllers, useXR, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Model } from '@shared/ui/model';
import { Suspense, useContext } from 'react';
import { XrContext } from '@shared/ui/layout/xr-context/xr-context';
import { OrbitControls } from '@react-three/drei';

export function ArCanvas({ src }: { src: string }) {
  const isXrSupported = useContext(XrContext);

  console.log(isXrSupported);

  return (
    <>
      <ARButton sessionInit={{ requiredFeatures: ['hit-test'] }} />
      <div
        style={{
          height: 'calc(100vh - var(--header-height))',
        }}
      >
        <Canvas>
          <XR>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model src={src} />
            <OrbitControls />
            <Controllers />
          </XR>
        </Canvas>
      </div>
    </>
  );
}
