import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
function Model() {

  const { scene } = useGLTF("/laptop.glb");
  
  return <primitive object={scene} scale={12} />;
}

export default function ProductModel() {
  return (
  
    <div className="w-full h-[700px] pt-40">
      
      <Canvas camera={{ position: [0, 2.5, 5] }}>
        
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        {/* 3D Object  */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* --- Camera Controls --- */}
        <OrbitControls
          enableZoom={false}       // Prevents the user from scrolling to zoom in/out
          autoRotate={true}        // Makes the laptop spin automatically
          autoRotateSpeed={3.0}    // Controls how fast the laptop spins
        />
      </Canvas>
    </div>
  );
}