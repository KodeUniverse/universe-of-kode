import * as THREE from "three";

export default function renderBackground(rootElement: HTMLElement) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050510);
  const camera = new THREE.PerspectiveCamera(
    60,
    innerWidth / innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 5.5;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  rootElement.appendChild(renderer.domElement);

  const PARTICLE_COUNT = 1000;
  const spreadX = 20;
  const spreadY = 8;
  const spreadZ = 10;
  const fallSpeed = 0.008;
  const windStrength = 0.001;

  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const speeds = new Float32Array(PARTICLE_COUNT);
  const phases = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spreadX;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ - 2;
    speeds[i] = 0.6 + Math.random() * 0.4;
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xaaccff,
    size: 0.06,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const snow = new THREE.Points(geo, material);
  scene.add(snow);

  const clock = new THREE.Clock();

  renderer.setAnimationLoop(() => {
    const elapsed = clock.getElapsedTime();
    const pos = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      pos[i3 + 1] -= fallSpeed * speeds[i];
      pos[i3] += Math.sin(elapsed * 0.6 + phases[i]) * windStrength;
      if (pos[i3 + 1] < -spreadY / 2) {
        pos[i3 + 1] = spreadY / 2;
        pos[i3] = (Math.random() - 0.5) * spreadX;
        pos[i3 + 2] = (Math.random() - 0.5) * spreadZ - 2;
      }
    }
    geo.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  });
}
