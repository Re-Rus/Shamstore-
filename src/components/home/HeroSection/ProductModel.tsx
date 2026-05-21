import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// --- 1. Model Loading Component ---
// This function handles loading and displaying the actual 3D file
function Model() {
  // useGLTF hook loads the 3D model file (ensure 'laptop.glb' is in your public folder)
  const { scene } = useGLTF("/laptop.glb");
  
  // <primitive> is used to render existing 3D objects (like our loaded scene)
  // scale={12} makes the model 12 times larger than its original size
  return <primitive object={scene} scale={12} />;
}

// --- 2. Main 3D Scene Component ---
export default function ProductModel() {
  return (
    // Container div with Tailwind classes for dimensions and spacing
    <div className="w-full h-[700px] pt-40">
      
      {/* <Canvas> is the 3D workspace/engine where everything is rendered. 
          The camera position is set to [x: 0, y: 2.5, z: 5] to view the laptop from a good angle */}
      <Canvas camera={{ position: [0, 2.5, 5] }}>
        
        {/* --- Lighting --- */}
        {/* ambientLight provides a base level of light everywhere, preventing pitch-black shadows */}
        <ambientLight intensity={1} />
        {/* directionalLight acts like the sun, shining from a specific position [x, y, z] to create highlights and depth */}
        <directionalLight position={[2, 2, 2]} />

        {/* --- 3D Object --- */}
        {/* Suspense is required when loading asynchronous data (like a 3D file).
            fallback={null} means it will show nothing while loading, but you could add a spinner here */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* --- Camera Controls --- */}
        {/* OrbitControls allows the user to interact with the 3D scene using their mouse/touch */}
        <OrbitControls
          enableZoom={false}       // Prevents the user from scrolling to zoom in/out
          autoRotate={true}        // Makes the laptop spin automatically
          autoRotateSpeed={3.0}    // Controls how fast the laptop spins
        />
      </Canvas>
    </div>
  );
}