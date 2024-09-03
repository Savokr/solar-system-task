import {
  AmbientLight, 
  Camera, 
  MeshBasicMaterial, 
  PerspectiveCamera, 
  PointLight, 
  Raycaster, 
  Scene, 
  Vector2, 
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; //@ts-ignore
import { Text } from 'troika-three-text';
import { Planet } from './Planet';
import { Orbit } from './Orbit';

import sunTexture from './assets/sun_texture.jpeg';
import earthTexture from './assets/earth_texture.jpeg';
import moonTexture from './assets/moon_texture.jpg';


function setupLights(scene: Scene) {
  const ambientLight = new AmbientLight('white', 0.1);
  const pointLight = new PointLight('white', 100);

  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.castShadow = true;
  pointLight.receiveShadow = true;


  scene.add(ambientLight);
  scene.add(pointLight);
}

function initRenderer() {
  const renderer = new WebGLRenderer({antialias: true});
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(0.7);
  document.body.appendChild(renderer.domElement);

  return renderer;
}

function setupControls(camera: Camera, renderer: WebGLRenderer) {
  const controls = new OrbitControls(camera, renderer.domElement);

  controls.target.set(0, 0, 0);
  camera.position.set(0, 2, 8);

  return controls;
}

function main() {
  const sunRadius = 2;
  const sunRotationSpeed = 0.005;

  const earthRadius = 0.5;
  const earthOrbitRadius = 7;
  const earthOrbitSpeed = 0.007;

  const moonRadius = 0.1;
  const moonOrbitRadius = 1;
  const moonOrbitSpeed = 0.02;

  const raycaster = new Raycaster();

  const renderer = initRenderer();

  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);

  const controls = setupControls(camera, renderer);

  const scene = new Scene();

  setupLights(scene);
  
  const sun = new Planet({
    name: 'Sun', 
    radius: sunRadius, 
    textureSrc: sunTexture, 
    rotationSpeed: sunRotationSpeed, 
    customMaterial: new MeshBasicMaterial({color: 'yellow'})});
  sun.mesh.castShadow = false;
  sun.mesh.receiveShadow = false;
  sun.textObject.color = 'yellow';

  const earth = new Planet({
    name: 'Earth', 
    radius: earthRadius, 
    textureSrc: earthTexture, 
    rotationSpeed: 0.01});
  earth.textObject.color = 'Aquamarine';

  const moon = new Planet({
    name: 'Moon', 
    radius: moonRadius, 
    textureSrc: moonTexture, 
    rotationSpeed: 0})

  const moonOrbit = new Orbit({
    planet: moon, 
    radius: moonOrbitRadius, 
    orbitSpeed: moonOrbitSpeed});

  const earthOrbit = new Orbit({
    planet: earth, 
    radius: earthOrbitRadius, 
    orbitSpeed: earthOrbitSpeed, 
    planetOrbit: moonOrbit});

  scene.add(earthOrbit);
  scene.add(sun);

  function animate() {
    controls.update();
    renderer.render(scene, camera);

    sun.updateAnimation(camera);
    earth.updateAnimation(camera);
    moon.updateAnimation(camera);

    moonOrbit.updateAnimation();
    earthOrbit.updateAnimation();

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('click', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(new Vector2(x, y), camera);
    
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].object.userData.planet) {
      const planet = intersects[0].object.userData.planet as Planet;
    
      planet.isRotating = !planet.isRotating;
      planet.isOrbiting = !planet.isOrbiting;
    }
  });

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

window.addEventListener('load', main);