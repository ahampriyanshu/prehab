'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { LayerId } from '@/types/kinetic';
import { KINETIC_LAYERS } from '@/data/kinetic-chain';
import {
  RotateCcw,
  Maximize2,
  Eye,
  Layers as LayersIcon,
  Play,
  Pause,
  Compass,
  AlertTriangle,
} from 'lucide-react';

interface KineticCanvas3DProps {
  activeLayerId: LayerId;
  onSelectLayer: (layerId: LayerId) => void;
  showDysfunctionChain?: boolean;
}

type ModelType = 'mannequin' | 'anatomy';

export function KineticCanvas3D({
  activeLayerId,
  onSelectLayer,
  showDysfunctionChain = false,
}: KineticCanvas3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelType, setModelType] = useState<ModelType>('mannequin');
  const [loading, setLoading] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hoveredPart, setHoveredPart] = useState<{
    name: string;
    layerId: LayerId;
  } | null>(null);

  // References to Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const currentModelRef = useRef<THREE.Group | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const clickableMeshesRef = useRef<THREE.Mesh[]>([]);
  const targetCameraPosRef = useRef<THREE.Vector3 | null>(null);
  const targetLookAtRef = useRef<THREE.Vector3 | null>(null);
  const kineticBeaconsRef = useRef<THREE.Group | null>(null);

  // Layer bounds and color helper
  const getLayerColor = (layerId: LayerId) => {
    switch (layerId) {
      case 'foot-base':
        return 0x10b981; // emerald
      case 'torsion-stability':
        return 0x0ea5e9; // sky
      case 'core-cylinder':
        return 0xf59e0b; // amber
      case 'upper-carriage':
        return 0x8b5cf6; // violet
      case 'mind-presence':
        return 0xec4899; // pink
      default:
        return 0x64748b;
    }
  };

  // Camera presets based on layer
  const applyCameraPreset = useCallback((layerId: LayerId | 'all') => {
    if (!controlsRef.current || !cameraRef.current) return;

    let targetLookAt = new THREE.Vector3(0, 1.0, 0);
    let targetPos = new THREE.Vector3(0, 1.1, 2.8);

    switch (layerId) {
      case 'foot-base':
        targetLookAt = new THREE.Vector3(0, 0.15, 0);
        targetPos = new THREE.Vector3(0, 0.45, 1.2);
        break;
      case 'torsion-stability':
        targetLookAt = new THREE.Vector3(0, 0.65, 0);
        targetPos = new THREE.Vector3(0, 0.75, 1.6);
        break;
      case 'core-cylinder':
        targetLookAt = new THREE.Vector3(0, 1.05, 0);
        targetPos = new THREE.Vector3(0, 1.15, 1.5);
        break;
      case 'upper-carriage':
        targetLookAt = new THREE.Vector3(0, 1.45, 0);
        targetPos = new THREE.Vector3(0, 1.5, 1.3);
        break;
      case 'mind-presence':
        targetLookAt = new THREE.Vector3(0, 1.7, 0);
        targetPos = new THREE.Vector3(0, 1.75, 0.9);
        break;
      case 'all':
      default:
        targetLookAt = new THREE.Vector3(0, 0.95, 0);
        targetPos = new THREE.Vector3(0, 1.1, 2.7);
        break;
    }

    targetCameraPosRef.current = targetPos;
    targetLookAtRef.current = targetLookAt;
  }, []);

  // Update camera when active layer changes
  useEffect(() => {
    applyCameraPreset(activeLayerId);
    updateBeacons(activeLayerId, showDysfunctionChain);
  }, [activeLayerId, showDysfunctionChain, applyCameraPreset]);

  // Update 3D kinetic beacon rings & indicators in the scene
  const updateBeacons = (layerId: LayerId, isDysfunction: boolean) => {
    if (!kineticBeaconsRef.current) return;
    const group = kineticBeaconsRef.current;

    // Clear existing beacons
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    const color = isDysfunction ? 0xf43f5e : getLayerColor(layerId);

    // Helper to create glowing ring
    const createRing = (y: number, radius: number, tilt = 0) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.008, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.85,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + tilt;
      ring.position.y = y;
      return ring;
    };

    // Helper to create joint beacon sphere
    const createSphere = (x: number, y: number, z: number, r = 0.03) => {
      const geo = new THREE.SphereGeometry(r, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.8,
        roughness: 0.2,
      });
      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(x, y, z);
      return sphere;
    };

    // Add layer-specific 3D indicators
    if (layerId === 'foot-base') {
      // Ground tripod anchors
      group.add(createRing(0.02, 0.28));
      group.add(createSphere(-0.12, 0.03, 0.05, 0.025));
      group.add(createSphere(0.12, 0.03, 0.05, 0.025));
      group.add(createSphere(-0.12, 0.08, -0.02, 0.025)); // Ankles
      group.add(createSphere(0.12, 0.08, -0.02, 0.025));
    } else if (layerId === 'torsion-stability') {
      // Knees & Hips rings
      group.add(createRing(0.5, 0.22));
      group.add(createRing(0.9, 0.28));
      group.add(createSphere(-0.1, 0.5, 0.03, 0.035)); // Left Knee
      group.add(createSphere(0.1, 0.5, 0.03, 0.035)); // Right Knee
      group.add(createSphere(-0.15, 0.9, 0, 0.04)); // Left Hip
      group.add(createSphere(0.15, 0.9, 0, 0.04)); // Right Hip
    } else if (layerId === 'core-cylinder') {
      // 360° Cylinder Wireframe
      const cylGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.35, 32, 4, true);
      const cylMat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const cyl = new THREE.Mesh(cylGeo, cylMat);
      cyl.position.y = 1.1;
      group.add(cyl);

      group.add(createRing(0.95, 0.22)); // Pelvic base ring
      group.add(createRing(1.25, 0.24)); // Diaphragm dome ring
    } else if (layerId === 'upper-carriage') {
      // Scapular & Chest bracket
      group.add(createRing(1.4, 0.32));
      group.add(createSphere(-0.18, 1.42, 0.02, 0.035)); // Shoulders
      group.add(createSphere(0.18, 1.42, 0.02, 0.035));
      group.add(createSphere(0, 1.5, -0.02, 0.03)); // Cervical base
    } else if (layerId === 'mind-presence') {
      // Crown halo & horizon gaze arrow
      const halo = createRing(1.85, 0.16);
      group.add(halo);
      group.add(createSphere(0, 1.75, 0, 0.05)); // Vestibular center

      // Horizon gaze line in front of eyes
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 1.72, 0.1),
        new THREE.Vector3(0, 1.72, 0.7),
      ]);
      const lineMat = new THREE.LineDashedMaterial({
        color: color,
        dashSize: 0.05,
        gapSize: 0.03,
      });
      const gazeLine = new THREE.Line(lineGeo, lineMat);
      gazeLine.computeLineDistances();
      group.add(gazeLine);
    }
  };

  // Main Three.js Scene Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x06090e);
    scene.fog = new THREE.FogExp2(0x06090e, 0.18);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.1, 2.7);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0.5;
    controls.maxDistance = 5.0;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // Don't go deep beneath ground
    controls.target.set(0, 0.95, 0);
    controlsRef.current = controls;

    // 5. Lighting Setup (Studio Rim / Biomechanical Lab)
    const ambientLight = new THREE.AmbientLight(0x334155, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(2.5, 4, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight1 = new THREE.DirectionalLight(0x0ea5e9, 2.5); // Sky rim light
    rimLight1.position.set(-3, 3, -2);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0x10b981, 1.8); // Emerald rim
    rimLight2.position.set(3, 1, -2);
    scene.add(rimLight2);

    const footLight = new THREE.PointLight(0x38bdf8, 1.2, 3);
    footLight.position.set(0, 0.1, 1);
    scene.add(footLight);

    // 6. Ground Grid & Contact Circle
    const grid = new THREE.GridHelper(6, 24, 0x1e293b, 0x0f172a);
    grid.position.y = 0;
    scene.add(grid);

    const groundCircleGeo = new THREE.RingGeometry(0.05, 0.45, 32);
    const groundCircleMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const groundCircle = new THREE.Mesh(groundCircleGeo, groundCircleMat);
    groundCircle.rotation.x = Math.PI / 2;
    groundCircle.position.y = 0.005;
    scene.add(groundCircle);

    // 7. Beacons Group
    const beaconsGroup = new THREE.Group();
    scene.add(beaconsGroup);
    kineticBeaconsRef.current = beaconsGroup;

    // 8. Load Model
    loadActiveModel(modelType, scene);

    // 9. Resize Listener
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 10. Mouse Move for Raycasting
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y =
        -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    // 11. Mouse Click for Selecting Layer in 3D
    const handleCanvasClick = () => {
      if (!cameraRef.current) return;
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(
        clickableMeshesRef.current,
        true
      );

      if (intersects.length > 0) {
        const hit = intersects[0];
        const hitY = hit.point.y;

        // Map height in 3D space to kinetic layer
        if (hitY < 0.35) {
          onSelectLayer('foot-base');
        } else if (hitY < 0.95) {
          onSelectLayer('torsion-stability');
        } else if (hitY < 1.35) {
          onSelectLayer('core-cylinder');
        } else if (hitY < 1.65) {
          onSelectLayer('upper-carriage');
        } else {
          onSelectLayer('mind-presence');
        }
      }
    };
    renderer.domElement.addEventListener('click', handleCanvasClick);

    // 12. Animation Loop
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      // Smooth camera interpolation
      if (targetCameraPosRef.current && cameraRef.current) {
        cameraRef.current.position.lerp(targetCameraPosRef.current, 0.05);
        if (
          cameraRef.current.position.distanceTo(targetCameraPosRef.current) <
          0.005
        ) {
          targetCameraPosRef.current = null;
        }
      }

      if (targetLookAtRef.current && controlsRef.current) {
        controlsRef.current.target.lerp(targetLookAtRef.current, 0.05);
        if (
          controlsRef.current.target.distanceTo(targetLookAtRef.current) <
          0.005
        ) {
          targetLookAtRef.current = null;
        }
      }

      // Auto rotation
      if (controlsRef.current) {
        controlsRef.current.autoRotate = autoRotate;
        controlsRef.current.autoRotateSpeed = 1.2;
        controlsRef.current.update();
      }

      // Raycast hover check
      if (cameraRef.current && clickableMeshesRef.current.length > 0) {
        raycasterRef.current.setFromCamera(
          mouseRef.current,
          cameraRef.current
        );
        const intersects = raycasterRef.current.intersectObjects(
          clickableMeshesRef.current,
          true
        );

        if (intersects.length > 0) {
          const hitY = intersects[0].point.y;
          let layer: LayerId = 'foot-base';
          let partName = 'Foot & Ankle Base';

          if (hitY < 0.35) {
            layer = 'foot-base';
            partName = 'Foot Tripod & Talocrural Hinge';
          } else if (hitY < 0.95) {
            layer = 'torsion-stability';
            partName = 'Tibial Spiral & Hip Rotators';
          } else if (hitY < 1.35) {
            layer = 'core-cylinder';
            partName = 'Pelvic Bowl & 360° Cylinder';
          } else if (hitY < 1.65) {
            layer = 'upper-carriage';
            partName = 'Thoracic Spine & Scapulae';
          } else {
            layer = 'mind-presence';
            partName = 'Vestibular Crown & Cervical Axis';
          }

          setHoveredPart({ name: partName, layerId: layer });
          container.style.cursor = 'pointer';
        } else {
          setHoveredPart(null);
          container.style.cursor = 'grab';
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('click', handleCanvasClick);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // Run on mount

  // Function to load the model
  const loadActiveModel = (type: ModelType, scene: THREE.Scene) => {
    setLoading(true);
    setLoadProgress(0);

    // Remove previous model
    if (currentModelRef.current) {
      scene.remove(currentModelRef.current);
      currentModelRef.current = null;
    }
    clickableMeshesRef.current = [];

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    const modelPath =
      type === 'anatomy' ? '/models/body.glb' : '/models/Xbot.glb';

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        currentModelRef.current = model;

        // Auto-scale and align model to stand cleanly on ground (y = 0)
        const bbox = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        bbox.getSize(size);
        const center = new THREE.Vector3();
        bbox.getCenter(center);

        // Normalize model height to ~1.8 meters tall
        const targetHeight = 1.8;
        const scale = targetHeight / (size.y || 1);
        model.scale.set(scale, scale, scale);

        // Position feet at y = 0
        const updatedBox = new THREE.Box3().setFromObject(model);
        model.position.y = -updatedBox.min.y;
        model.position.x = -center.x * scale;
        model.position.z = -center.z * scale;

        // Material tuning for sleek bio-mechanical look
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            clickableMeshesRef.current.push(mesh);

            if (type === 'mannequin') {
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0x94a3b8,
                metalness: 0.25,
                roughness: 0.45,
              });
            } else {
              // Anatomy model
              if (mesh.material) {
                const mat = mesh.material as THREE.MeshStandardMaterial;
                mat.roughness = 0.5;
                mat.metalness = 0.1;
              }
            }
          }
        });

        scene.add(model);
        setLoading(false);

        // Initial beacons update
        updateBeacons(activeLayerId, showDysfunctionChain);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const progress = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadProgress(progress);
        }
      },
      (error) => {
        console.error('Error loading 3D model:', error);
        setLoading(false);
      }
    );
  };

  // Toggle model between Mannequin and Anatomy
  const handleToggleModel = (newType: ModelType) => {
    if (newType === modelType || !sceneRef.current) return;
    setModelType(newType);
    loadActiveModel(newType, sceneRef.current);
  };

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[400/580] bg-slate-950/90 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden select-none flex flex-col">
      {/* HUD Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3.5 bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent text-xs pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-slate-300 font-bold text-[11px]">
            3D Biomechanical View
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-emerald-400 border border-slate-700/60">
            WebGL 360°
          </span>
        </div>

        {/* Model Switcher Pill */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => handleToggleModel('mannequin')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
              modelType === 'mannequin'
                ? 'bg-slate-800 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Mannequin
          </button>
          <button
            onClick={() => handleToggleModel('anatomy')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
              modelType === 'anatomy'
                ? 'bg-slate-800 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Anatomy
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm gap-3">
          <div className="w-10 h-10 border-2 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
          <div className="font-mono text-xs text-slate-300">
            LOADING 3D {modelType.toUpperCase()} DATA ({loadProgress}%)
          </div>
          <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-200"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex-1 cursor-grab active:cursor-grabbing"
      />

      {/* Floating 3D Hover Tooltip */}
      {hoveredPart && (
        <div className="absolute top-14 left-4 z-20 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs shadow-xl backdrop-blur-md pointer-events-none transition-all flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#' + getLayerColor(hoveredPart.layerId).toString(16) }}
          />
          <span className="font-semibold text-slate-200">
            {hoveredPart.name}
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            [Click to Focus]
          </span>
        </div>
      )}

      {/* Floating Camera Presets Bar */}
      <div className="absolute bottom-12 left-3 right-3 z-20 flex items-center justify-center gap-1.5 overflow-x-auto p-1.5 bg-slate-900/85 border border-slate-800/80 rounded-xl backdrop-blur-md">
        <button
          onClick={() => applyCameraPreset('all')}
          className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          Full
        </button>
        <button
          onClick={() => onSelectLayer('foot-base')}
          className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
            activeLayerId === 'foot-base'
              ? 'bg-emerald-950 text-emerald-400 font-bold border border-emerald-800/60'
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          L1 Feet
        </button>
        <button
          onClick={() => onSelectLayer('torsion-stability')}
          className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
            activeLayerId === 'torsion-stability'
              ? 'bg-sky-950 text-sky-400 font-bold border border-sky-800/60'
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          L2 Hips
        </button>
        <button
          onClick={() => onSelectLayer('core-cylinder')}
          className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
            activeLayerId === 'core-cylinder'
              ? 'bg-amber-950 text-amber-400 font-bold border border-amber-800/60'
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          L3 Core
        </button>
        <button
          onClick={() => onSelectLayer('upper-carriage')}
          className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
            activeLayerId === 'upper-carriage'
              ? 'bg-violet-950 text-violet-400 font-bold border border-violet-800/60'
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          L4 Upper
        </button>
        <button
          onClick={() => onSelectLayer('mind-presence')}
          className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
            activeLayerId === 'mind-presence'
              ? 'bg-pink-950 text-pink-400 font-bold border border-pink-800/60'
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          L5 Head
        </button>
      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-3.5 py-2.5 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between text-[11px] text-slate-400 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            title="Toggle 360° Auto-Rotation"
          >
            {autoRotate ? (
              <Pause className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
            <span className="font-mono text-[10px]">
              {autoRotate ? '360° SPIN' : 'PAUSED'}
            </span>
          </button>
          <span className="text-slate-700">|</span>
          <span className="text-[10px] text-slate-400 hidden sm:inline">
            Drag to rotate &bull; Scroll to zoom
          </span>
        </div>

        <button
          onClick={() => applyCameraPreset(activeLayerId)}
          className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 hover:text-emerald-300"
        >
          <RotateCcw className="w-3 h-3" />
          RESET VIEW
        </button>
      </div>
    </div>
  );
}
