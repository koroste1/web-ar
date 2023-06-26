'use client';

import { Box, Circle, useGLTF } from '@react-three/drei';
import { Interactive, useHitTest, useXR } from '@react-three/xr';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Euler, Mesh, Vector3 } from 'three';

type Props = {
  src: string;
};

const DEFAULT_POSITION = new Vector3(0, 0, 0);
const DEFAULT_ROTATION = new Euler(0, 0, 0);

export function Model({ src }: Props) {
  const { scene: obj } = useGLTF(src);

  const [rotation, setRotation] = useState(() => DEFAULT_ROTATION);

  const isPresenting = useXR((state) => state.isPresenting);

  const asdads = useXR((state) => state.player);
  console.log(asdads);

  console.log(isPresenting);

  const hitPoint = useRef<Mesh>(null);

  const [isVisible, setVisible] = useState(isPresenting);

  const modelRef = useRef<Mesh>(null);
  const [modelPosition, setModelPosition] = useState(() => new Vector3(0, 0, 0));

  useHitTest((hitMatrix, hit) => {
    if (hitPoint.current) {
      // @ts-ignore
      hitMatrix.decompose(hitPoint.current.position, hitPoint.current.rotation, hitPoint.current.scale);
    }
  });

  useEffect(() => {
    if (!isPresenting) {
      setModelPosition(new Vector3(0, 0, 0));
    }

    setVisible(isPresenting);
  }, [isPresenting]);

  return (
    <Interactive
      onSelect={(event) => {
        setVisible(false);
        if (hitPoint.current) {
          setModelPosition(hitPoint.current.position);
        }
      }}
    >
      <primitive
        visible={!isVisible}
        object={obj}
        scale={1}
        ref={modelRef}
        rotation={rotation}
        position={[modelPosition.x, modelPosition.y - 0.5, modelPosition.z - 0.5]}
      />
      <Box ref={hitPoint} visible={isVisible} args={[0.1, 0.1, 0.1]} />
    </Interactive>
  );
}
