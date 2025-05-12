import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function NetworkSphere() {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.7, 4);
    const positions = geo.attributes.position;
    const edges = [];
    const threshold = 0.6;

    for (let i = 0; i < positions.count; i++) {
      const v1 = new THREE.Vector3().fromBufferAttribute(positions, i);
      for (let j = i + 1; j < positions.count; j++) {
        const v2 = new THREE.Vector3().fromBufferAttribute(positions, j);
        if (v1.distanceTo(v2) < threshold) {
          edges.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(edges, 3));
    return lineGeo;
  }, []);

  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[1.7, 64, 64]} />
        <meshBasicMaterial 
          color="#30ece9" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#30ece9" transparent opacity={0.7} />
      </lineSegments>
      <points>
        <sphereGeometry args={[1.7, 64, 64]} />
        <pointsMaterial color="#30ece9" size={0.02} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Product3DSphere() {
  return (
    <div className="product-3d-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <NetworkSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
