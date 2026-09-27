"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

interface LetterData {
  mesh: THREE.Mesh;
  basePosition: THREE.Vector3;
  baseRotation: THREE.Euler;
  targetPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  rotVelocity: THREE.Vector3;
  phaseOffset: number;
  floatSpeed: number;
  floatAmp: number;
}

export function HeroLettersScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // --- Material: Polished Liquid Obsidian Chrome ---
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1f1f22,
      metalness: 0.98,
      roughness: 0.11,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      specularIntensity: 1.5,
    });

    // --- Geometry Generation for Letters: A, R, U, N ---
    const RADIUS = 0.22;
    const RADIAL_SEG = 16;
    const TUBE_SEG = 24;

    function createCap(x: number, y: number, z: number) {
      const s = new THREE.SphereGeometry(RADIUS, RADIAL_SEG, RADIAL_SEG);
      s.translate(x, y, z);
      return s;
    }

    // Letter A
    function createLetterA() {
      const geoms: THREE.BufferGeometry[] = [];
      const legL = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(-0.95, -1.25, 0), new THREE.Vector3(0, 1.25, 0)),
        TUBE_SEG, RADIUS, RADIAL_SEG, false
      );
      const legR = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(0, 1.25, 0), new THREE.Vector3(0.95, -1.25, 0)),
        TUBE_SEG, RADIUS, RADIAL_SEG, false
      );
      const bar = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(-0.52, -0.2, 0), new THREE.Vector3(0.52, -0.2, 0)),
        12, RADIUS * 0.9, RADIAL_SEG, false
      );
      geoms.push(legL, legR, bar);
      geoms.push(createCap(0, 1.25, 0));
      geoms.push(createCap(-0.95, -1.25, 0));
      geoms.push(createCap(0.95, -1.25, 0));
      const merged = mergeGeometries(geoms);
      merged.center();
      return merged;
    }

    // Letter R
    function createLetterR() {
      const geoms: THREE.BufferGeometry[] = [];
      const spine = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(-0.75, -1.25, 0), new THREE.Vector3(-0.75, 1.25, 0)),
        TUBE_SEG, RADIUS, RADIAL_SEG, false
      );
      const loop = new THREE.TubeGeometry(
        new THREE.CubicBezierCurve3(
          new THREE.Vector3(-0.75, 1.25, 0),
          new THREE.Vector3(0.95, 1.25, 0),
          new THREE.Vector3(0.95, 0.05, 0),
          new THREE.Vector3(-0.75, 0.05, 0)
        ),
        32, RADIUS, RADIAL_SEG, false
      );
      const leg = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(-0.05, 0.05, 0), new THREE.Vector3(0.85, -1.25, 0)),
        16, RADIUS, RADIAL_SEG, false
      );
      geoms.push(spine, loop, leg);
      geoms.push(createCap(-0.75, 1.25, 0));
      geoms.push(createCap(-0.75, -1.25, 0));
      geoms.push(createCap(0.85, -1.25, 0));
      const merged = mergeGeometries(geoms);
      merged.center();
      return merged;
    }

    // Letter U
    function createLetterU() {
      const geoms: THREE.BufferGeometry[] = [];
      const path = new THREE.CurvePath<THREE.Vector3>();
      path.add(new THREE.LineCurve3(new THREE.Vector3(-0.8, 1.25, 0), new THREE.Vector3(-0.8, -0.35, 0)));
      path.add(
        new THREE.CubicBezierCurve3(
          new THREE.Vector3(-0.8, -0.35, 0),
          new THREE.Vector3(-0.8, -1.4, 0),
          new THREE.Vector3(0.8, -1.4, 0),
          new THREE.Vector3(0.8, -0.35, 0)
        )
      );
      path.add(new THREE.LineCurve3(new THREE.Vector3(0.8, -0.35, 0), new THREE.Vector3(0.8, 1.25, 0)));
      const tube = new THREE.TubeGeometry(path, 48, RADIUS, RADIAL_SEG, false);
      geoms.push(tube);
      geoms.push(createCap(-0.8, 1.25, 0));
      geoms.push(createCap(0.8, 1.25, 0));
      const merged = mergeGeometries(geoms);
      merged.center();
      return merged;
    }

    // Letter N
    function createLetterN() {
      const geoms: THREE.BufferGeometry[] = [];
      const spineL = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(-0.85, -1.25, 0), new THREE.Vector3(-0.85, 1.25, 0)),
        TUBE_SEG, RADIUS, RADIAL_SEG, false
      );
      const diag = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(-0.85, 1.25, 0), new THREE.Vector3(0.85, -1.25, 0)),
        28, RADIUS, RADIAL_SEG, false
      );
      const spineR = new THREE.TubeGeometry(
        new THREE.LineCurve3(new THREE.Vector3(0.85, -1.25, 0), new THREE.Vector3(0.85, 1.25, 0)),
        TUBE_SEG, RADIUS, RADIAL_SEG, false
      );
      geoms.push(spineL, diag, spineR);
      geoms.push(createCap(-0.85, 1.25, 0));
      geoms.push(createCap(-0.85, -1.25, 0));
      geoms.push(createCap(0.85, 1.25, 0));
      geoms.push(createCap(0.85, -1.25, 0));
      const merged = mergeGeometries(geoms);
      merged.center();
      return merged;
    }

    // --- Spatial Layout of Letters (inspired by Altun Hero) ---
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const baseScale = isMobile ? 0.65 : isTablet ? 0.95 : 1.25;

    const letterConfigs = [
      {
        geom: createLetterA(),
        pos: isMobile
          ? new THREE.Vector3(-1.4, 1.4, 0.1)
          : new THREE.Vector3(-2.8, 0.7, 0.4),
        rot: new THREE.Euler(0.12, 0.25, -0.15),
        floatSpeed: 0.8,
        floatAmp: 0.14,
        phase: 0,
      },
      {
        geom: createLetterR(),
        pos: isMobile
          ? new THREE.Vector3(1.2, 1.5, -0.2)
          : new THREE.Vector3(0.7, 1.5, -0.2),
        rot: new THREE.Euler(-0.15, -0.22, 0.18),
        floatSpeed: 0.95,
        floatAmp: 0.16,
        phase: 1.6,
      },
      {
        geom: createLetterU(),
        pos: isMobile
          ? new THREE.Vector3(-1.1, -1.6, 0.3)
          : new THREE.Vector3(1.8, -1.0, 0.6),
        rot: new THREE.Euler(0.25, -0.32, 0.15),
        floatSpeed: 0.75,
        floatAmp: 0.15,
        phase: 3.1,
      },
      {
        geom: createLetterN(),
        pos: isMobile
          ? new THREE.Vector3(1.4, -1.5, -0.4)
          : new THREE.Vector3(3.5, 0.4, -0.5),
        rot: new THREE.Euler(-0.2, 0.38, -0.22),
        floatSpeed: 0.85,
        floatAmp: 0.18,
        phase: 4.7,
      },
    ];

    const letters: LetterData[] = [];
    const letterMeshes: THREE.Mesh[] = [];

    const lettersGroup = new THREE.Group();
    scene.add(lettersGroup);

    letterConfigs.forEach((cfg) => {
      const mesh = new THREE.Mesh(cfg.geom, chromeMaterial);
      mesh.scale.setScalar(baseScale);
      mesh.position.copy(cfg.pos);
      mesh.rotation.copy(cfg.rot);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      lettersGroup.add(mesh);
      letterMeshes.push(mesh);

      letters.push({
        mesh,
        basePosition: cfg.pos.clone(),
        baseRotation: cfg.rot.clone(),
        targetPosition: cfg.pos.clone(),
        velocity: new THREE.Vector3(),
        rotVelocity: new THREE.Vector3(),
        phaseOffset: cfg.phase,
        floatSpeed: cfg.floatSpeed,
        floatAmp: cfg.floatAmp,
      });
    });

    // --- Architectural Studio Lighting ---
    // Key Light: Intense cool white highlight from top left
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(-10, 14, 10);
    scene.add(keyLight);

    // Rim/Cyan Accent Light: Signature studio hue from bottom right
    const fillLight = new THREE.DirectionalLight(0x9bd4d7, 2.2);
    fillLight.position.set(12, -8, 8);
    scene.add(fillLight);

    // Backlight: Razor sharp silhouette carve
    const backLight = new THREE.DirectionalLight(0xffffff, 2.8);
    backLight.position.set(0, 4, -12);
    scene.add(backLight);

    // Subtle front ambient fill
    const ambientLight = new THREE.AmbientLight(0x111115, 1.2);
    scene.add(ambientLight);

    // Point Light for immediate specular glint on letters
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 20);
    pointLight.position.set(0, 0, 7);
    scene.add(pointLight);

    // --- Interactive Drag & Mouse Parallax System ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const mouseTarget = new THREE.Vector2();
    const dragPlane = new THREE.Plane();
    const planeIntersect = new THREE.Vector3();
    const dragOffset = new THREE.Vector3();

    let draggedLetter: LetterData | null = null;
    let isDragging = false;
    let lastDragPoint = new THREE.Vector3();

    const getNDCMouse = (e: MouseEvent | Touch) => {
      const rect = container.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    const handlePointerDown = (e: MouseEvent) => {
      const ndc = getNDCMouse(e);
      mouse.set(ndc.x, ndc.y);
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(letterMeshes, false);
      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const found = letters.find((l) => l.mesh === hitMesh);
        if (found) {
          isDragging = true;
          draggedLetter = found;

          // Camera-facing plane passing through the hit object
          dragPlane.setFromNormalAndCoplanarPoint(
            camera.getWorldDirection(new THREE.Vector3()).negate(),
            hitMesh.position
          );

          if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
            dragOffset.copy(planeIntersect).sub(hitMesh.position);
            lastDragPoint.copy(planeIntersect);
          }

          container.style.cursor = "grabbing";
        }
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const ndc = getNDCMouse(e);
      mouse.set(ndc.x, ndc.y);
      mouseTarget.set(ndc.x, ndc.y);

      if (isDragging && draggedLetter) {
        raycaster.setFromCamera(mouse, camera);
        if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
          const newPos = planeIntersect.clone().sub(dragOffset);
          const deltaX = planeIntersect.x - lastDragPoint.x;
          const deltaY = planeIntersect.y - lastDragPoint.y;

          draggedLetter.targetPosition.copy(newPos);
          draggedLetter.mesh.position.copy(newPos);

          // Apply rotation tilt proportional to drag
          draggedLetter.mesh.rotation.y += deltaX * 1.2;
          draggedLetter.mesh.rotation.x -= deltaY * 1.2;
          draggedLetter.mesh.rotation.z += deltaX * 0.4;

          draggedLetter.rotVelocity.set(-deltaY * 0.15, deltaX * 0.15, deltaX * 0.05);

          lastDragPoint.copy(planeIntersect);
        }
      } else {
        // Hover detection
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(letterMeshes, false);
        container.style.cursor = intersects.length > 0 ? "grab" : "default";
      }
    };

    const handlePointerUp = () => {
      if (isDragging && draggedLetter) {
        isDragging = false;
        container.style.cursor = "grab";
        draggedLetter = null;
      }
    };

    // Attach pointer listeners to container and window
    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    // Touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const ndc = getNDCMouse(e.touches[0]);
        mouse.set(ndc.x, ndc.y);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(letterMeshes, false);
        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const found = letters.find((l) => l.mesh === hitMesh);
          if (found) {
            isDragging = true;
            draggedLetter = found;
            dragPlane.setFromNormalAndCoplanarPoint(
              camera.getWorldDirection(new THREE.Vector3()).negate(),
              hitMesh.position
            );
            if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
              dragOffset.copy(planeIntersect).sub(hitMesh.position);
              lastDragPoint.copy(planeIntersect);
            }
          }
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && draggedLetter && e.touches.length === 1) {
        const ndc = getNDCMouse(e.touches[0]);
        mouse.set(ndc.x, ndc.y);
        raycaster.setFromCamera(mouse, camera);
        if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
          const newPos = planeIntersect.clone().sub(dragOffset);
          const deltaX = planeIntersect.x - lastDragPoint.x;
          const deltaY = planeIntersect.y - lastDragPoint.y;
          draggedLetter.targetPosition.copy(newPos);
          draggedLetter.mesh.position.copy(newPos);
          draggedLetter.mesh.rotation.y += deltaX * 1.2;
          draggedLetter.mesh.rotation.x -= deltaY * 1.2;
          lastDragPoint.copy(planeIntersect);
        }
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      draggedLetter = null;
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    const startTime = performance.now();
    const currentMouse = new THREE.Vector2();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera mouse parallax
      currentMouse.x += (mouseTarget.x - currentMouse.x) * 0.05;
      currentMouse.y += (mouseTarget.y - currentMouse.y) * 0.05;

      lettersGroup.rotation.y = currentMouse.x * 0.12;
      lettersGroup.rotation.x = -currentMouse.y * 0.08;

      letters.forEach((item) => {
        // If this letter is not actively being dragged, apply floating physics
        if (item !== draggedLetter) {
          // Floating wave offset
          const floatY =
            Math.sin(elapsedTime * item.floatSpeed + item.phaseOffset) *
            item.floatAmp;
          const floatRotZ =
            Math.cos(elapsedTime * (item.floatSpeed * 0.8) + item.phaseOffset) *
            0.06;
          const floatRotY =
            Math.sin(elapsedTime * (item.floatSpeed * 0.6) + item.phaseOffset) *
            0.05;

          const anchorPos = item.basePosition.clone();
          anchorPos.y += floatY;

          // Spring return to anchor
          const displacement = anchorPos.sub(item.mesh.position);
          item.velocity.add(displacement.multiplyScalar(0.04));
          item.velocity.multiplyScalar(0.88); // damping
          item.mesh.position.add(item.velocity);

          // Spring return to base rotation
          item.rotVelocity.multiplyScalar(0.92);
          item.mesh.rotation.x +=
            (item.baseRotation.x - item.mesh.rotation.x) * 0.03 +
            item.rotVelocity.x;
          item.mesh.rotation.y +=
            (item.baseRotation.y + floatRotY - item.mesh.rotation.y) * 0.03 +
            item.rotVelocity.y;
          item.mesh.rotation.z +=
            (item.baseRotation.z + floatRotZ - item.mesh.rotation.z) * 0.03 +
            item.rotVelocity.z;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);

      letterMeshes.forEach((mesh) => {
        mesh.geometry.dispose();
      });
      chromeMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  );
}
