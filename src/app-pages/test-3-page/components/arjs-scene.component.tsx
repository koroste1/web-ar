'use client';

export function ArJsScene() {
  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-cone position="0 0.5 0" rotation="0 0 0" radius-bottom="0.5" material="opacity: 0.75; color: red;"></a-cone>
      </a-marker>
    </a-scene>
  );
}
