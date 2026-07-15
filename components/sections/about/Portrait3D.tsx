"use client";

import { Component, Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  ContactShadows,
  Html,
  OrbitControls,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { CornerTab } from "@/components/ui/CornerTab";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="whitespace-nowrap text-sm text-neutral-400">
        Đang tải mô hình 3D… {Math.round(progress)}%
      </div>
    </Html>
  );
}

// Catches a missing/broken .glb so the page shows a hint instead of crashing.
class ModelErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function MissingModel() {
  return (
    <Html center>
      <div className="w-56 text-center text-sm leading-relaxed text-neutral-400">
        Chưa có mô hình 3D.
        <br />
        Đặt file tại{" "}
        <code className="text-neutral-200">public/models/me.glb</code>
      </div>
    </Html>
  );
}

export function Portrait3D({
  src = "/models/me.glb",
  name = "Trần Gia Như",
}: {
  src?: string;
  name?: string;
}) {
  return (
    <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
      <div
        className="relative aspect-3/4 w-full overflow-hidden rounded-3xl sm:aspect-auto sm:h-full"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 35%, #2a2c31 0%, #131417 55%, #0b0c0e 100%)",
        }}
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0.4, 5], fov: 40 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          {/* lighting — self-contained, no external HDRI */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 6, 5]} intensity={1.6} castShadow />
          <directionalLight position={[-5, 3, -4]} intensity={0.5} />
          <directionalLight position={[0, 2, -6]} intensity={0.4} />

          <ModelErrorBoundary fallback={<MissingModel />}>
            <Suspense fallback={<Loader />}>
              {/* auto-frame the model in view, then center it */}
              <Bounds fit clip observe margin={1.15}>
                <Center>
                  <Model url={src} />
                </Center>
              </Bounds>
              <ContactShadows
                position={[0, -1.4, 0]}
                opacity={0.5}
                scale={12}
                blur={2.4}
                far={4}
              />
            </Suspense>
          </ModelErrorBoundary>

          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.9}
            enablePan={false}
            enableZoom
            minDistance={2.5}
            maxDistance={9}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.9}
          />
        </Canvas>

        <CornerTab corner="bottom-right" tone="light">
          {name}
        </CornerTab>
      </div>
    </div>
  );
}

// Preload so the model starts fetching as soon as the chunk loads.
useGLTF.preload("/models/me.glb");
