import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Card } from 'antd';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Set size dynamically
    const width = 1000;
    const height = 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    // Add cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    // OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;




    const loader = new GLTFLoader();
loader.load('./box-02_robot.glb', function(gltf) {
    gltf.scene.position.y=-1.5;
    scene.add(gltf.scene);
});

// const loader = new GLTFLoader();
// loader.load('./cute_character.glb', function(gltf) {
// gltf.scene.position.y=-1.5;    
// scene.add(gltf.scene);
// });

// Adjust camera position to be further back and higher up
//camera.position.set(-500, 10, 20);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Card title="My 3D Scene">
      <div
        ref={mountRef}
        style={{ width: '100%', height: '400px', cursor: 'grab' }}
      />
    </Card>
  );
};

export default ThreeScene; 