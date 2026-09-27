"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // transparent to allow rich CSS background

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Procedural Organic Torus-Knot Sculpture
    // High-density geometry for smooth specular light reflections
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.42, 220, 48, 2, 3);
    const originalPositions = geometry.attributes.position.clone();

    // Premium dark metallic material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1a1a1e),
      emissive: new THREE.Color(0x06080d),
      metalness: 0.94,
      roughness: 0.22,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
      reflectivity: 0.85,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(1.1, 1.1, 1.1);
    scene.add(mesh);

    // Subtle outer floating wireframe cage for architectural tech precision
    const wireGeo = new THREE.IcosahedronGeometry(2.4, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x9bd4d7,
      wireframe: true,
      transparent: true,
      opacity: 0.035,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Lighting Setup
    // Key light (cool architectural light)
    const keyLight = new THREE.DirectionalLight(0xe8f4f8, 3.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Rim light (subtle magenta / violet sheen)
    const rimLight = new THREE.DirectionalLight(0xbba8e4, 2.0);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    // Accent light (signature cyan reflection)
    const cyanLight = new THREE.PointLight(0x9bd4d7, 2.5, 12);
    cyanLight.position.set(0, -2, 3);
    scene.add(cyanLight);

    // Ambient light (deep obsidian fill)
    const ambientLight = new THREE.AmbientLight(0x101216, 1.2);
    scene.add(ambientLight);

    // Mouse Tracking with smooth interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const speed = prefersReducedMotion ? 0.05 : 0.25;

      // Base rotation
      mesh.rotation.x = elapsedTime * speed * 0.7 + mouseY * 0.8;
      mesh.rotation.y = elapsedTime * speed + mouseX * 0.8;
      mesh.rotation.z = Math.sin(elapsedTime * 0.3) * 0.2;

      wireMesh.rotation.x = -elapsedTime * speed * 0.3;
      wireMesh.rotation.y = -elapsedTime * speed * 0.4;

      // Organic subtle vertex pulsing / wave deformation
      if (!prefersReducedMotion) {
        const pos = geometry.attributes.position;
        const orig = originalPositions;
        const time = elapsedTime * 1.2;

        for (let i = 0; i < pos.count; i += 3) {
          const ox = orig.getX(i);
          const oy = orig.getY(i);
          const oz = orig.getZ(i);

          const displacement = Math.sin(ox * 2 + time) * Math.cos(oy * 2 + time) * 0.045;
          pos.setXYZ(i, ox + ox * displacement, oy + oy * displacement, oz + oz * displacement);
        }
        pos.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean disposal of WebGL resources
      geometry.dispose();
      originalPositions.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
