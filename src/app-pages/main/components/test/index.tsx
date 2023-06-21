'use client';

import { Canvas } from '@react-three/fiber';
import { ARButton, Controllers, Interactive, XR } from '@react-three/xr';
import { Text, useGLTF } from '@react-three/drei';
import { Suspense, useContext, useState } from 'react';
import { XrContext } from '@shared/ui/layout/xr-context/xr-context';

function Box({ color, size, scale, children, ...rest }: any) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
}

function Model() {
  const { scene: obj } = useGLTF('/models/chair-2.glb');

  return <primitive object={obj} scale={1} position={[0, -1, -1, 5]} />;
}

function Button(props: any) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState<any>('blue');

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  return (
    <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
      <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
        <Suspense fallback={null}>
          <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
            Hello react-xr!
          </Text>
        </Suspense>
      </Box>
    </Interactive>
  );
}

export function TestComponent() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/*<Button position={[0, 0.1, -0.2]} />*/}
          <Model />
          <Controllers />
        </XR>
      </Canvas>
    </>
  );
}
