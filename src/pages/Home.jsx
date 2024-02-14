import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import starsTexture from '/images/stars.jpg';
import Planet from '../components/three.js/Planet.jsx';
import Galaxy from '../components/three.js/Galaxy.jsx';

const CAMERA_FOV = 45;
const CAMERA_NEAR = 200;
const CAMERA_FAR = 2000;
const CAMERA_X = -90;
const CAMERA_Y = 0 ;
const CAMERA_Z = innerHeight/2;

const Home = () => {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
        CAMERA_FOV,
        window.innerWidth / window.innerHeight,
        CAMERA_NEAR,
        CAMERA_FAR
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.update();

    camera.position.set(CAMERA_X, CAMERA_Y, CAMERA_Z);

    const scene = new THREE.Scene();
    
    const cubeTextureLoader = new THREE.CubeTextureLoader();

    scene.background = cubeTextureLoader.load([
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture
    ]);

    // Construct planet 1
    const planet1 = new Planet(75,0.4).createSphere(1600);
    planet1.position.set(200,20,0);
    scene.add(planet1);

    // Construct moon 1
    const moon1 = new Planet(5,0.4).createSphere(200);
    moon1.position.set(100,0,10);
    const moon = new THREE.Object3D();
    moon.add(moon1);
    moon.position.set(200,20,0);
    scene.add(moon);

    // Construct planet 2
    const planet2 = new Planet(100,0.75).createSphere(1300); 
    planet2.position.set(-150,190,-550);
    scene.add(planet2);

    // construct galaxy
    const galaxy = new Galaxy(5000, 2, 40, 1).createGalaxy(0x00ff00, 0x0000ff);
    galaxy.position.set(-250,-80,-650);
    galaxy.lookAt(planet2.position);
    scene.add(galaxy);

    const galaxy2 = new Galaxy(1000, 4, 40, 1).createGalaxy( 0xffff00, 0xff0000);
    galaxy2.position.set(160,300,-550);
    galaxy2.lookAt(planet2.position);
    scene.add(galaxy2);

    const galaxy3 = new Galaxy(2000, 8, 80, 1).createGalaxy(0x00ff00, 0x0000ff);
    galaxy3.position.set(650,310,-450);
    galaxy3.lookAt(planet2.position);
    scene.add(galaxy3);

    const animate = (time)=>{
        time *= 0.005;
        planet1.rotation.y = time*0.1;
        planet2.rotation.y = time*0.2;

        moon1.rotation.y = time*0.5
        moon.rotation.y = time*0.3;
        galaxy.setRotationFromAxisAngle(new THREE.Vector3(1,1,0), time*0.1);
        galaxy2.setRotationFromAxisAngle(new THREE.Vector3(0,1,0), time*0.2);
        galaxy3.setRotationFromAxisAngle(new THREE.Vector3(0,1,0), time*0.1);

        controls.update();
        renderer.render(scene, camera);
        
        requestAnimationFrame(animate);
    }

    // Greetings
    const greetings = document.createElement('div');
    greetings.className = 'absolute top-1/4 md:top-1/2 left-5 md:left-24 text-white font-poppins bg-transparent';
    
    const name = document.createElement('h1');
    name.innerHTML = 'Samuel Immanuel Herlinton Sibuea';
    name.className = 'pb-5 font-bold text-xl md:text-3xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient drop-shadow-x'

    const greet = document.createElement('p');
    greet.innerHTML = 'Hi, Fellow Stalker! ✋';
    greet.className = 'pb-1 font-bold text-xl md:text-2xl '

    const occupation = document.createElement('p');
    occupation.innerHTML = 'I\'m a Software Engineer';

    occupation.className = 'font-bold text-xl md:text-3xl'

    greetings.appendChild(name);
    greetings.appendChild(greet);
    greetings.appendChild(occupation);    

    const copyright = document.createElement('p');
    copyright.innerHTML = '©Copyright 2024'
    copyright.className = 'absolute bottom-3 left-3 md:left-24 text-white'
    
    document.body.appendChild(greetings);
    document.body.appendChild(copyright);
    
    requestAnimationFrame(animate);

    return () => {
      greetings.remove();
      copyright.remove();  
      renderer.domElement.remove();
    };
  }, []);
};

export default Home;