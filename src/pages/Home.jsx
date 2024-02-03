import { useEffect } from 'react';
import * as THREE from 'three';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SCENE_BACKGROUND_COLOR = 0x000000;

const CAMERA_FOV = 12;
const CAMERA_NEAR = 100;
const CAMERA_FAR = 1000;
const CAMERA_X = 0;
const CAMERA_Y = 0 ;
const CAMERA_Z = innerHeight/2;

const SPHERE_RADIUS = 20;
// const LATITUDE_COUNT = 30;
// const LONGITUDE_COUNT = 50;
// const DOT_DENSITY = 0.5;

const DOT_SIZE = 0.2;
const DOT_COLOR = 0xc6cdd5   ;

const Home = () => {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer(
    );
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
    
    scene.background = new THREE.Color(SCENE_BACKGROUND_COLOR);
    
    const dotGeometries = [];
    const vector = new THREE.Vector3();

    for(var i = 0; i<1600; i++){
        const dotGeometry = new THREE.CircleGeometry(DOT_SIZE, 5);
        const phi = Math.random()*Math.PI;
        const theta = Math.random()*2*Math.PI;

        vector.setFromSphericalCoords(SPHERE_RADIUS, phi, theta);
        dotGeometry.lookAt(vector);
        dotGeometry.translate(vector.x, vector.y, vector.z);
        dotGeometries.push(dotGeometry);
    }

    // other pattern
    
    // for(let lat=0; lat<=LATITUDE_COUNT; lat+=1){
    //     for(let lng = 0; lng<LONGITUDE_COUNT; lng+=1){
    //         const dotGeometry = new THREE.CircleGeometry(DOT_SIZE, 5);
    //         const phi = (Math.PI/LATITUDE_COUNT)*lat;
    //         const theta = ((2*Math.PI)/LONGITUDE_COUNT)*lng;

    //         vector.setFromSphericalCoords(SPHERE_RADIUS, phi, theta);
    //         dotGeometry.lookAt(vector);
    //         dotGeometry.translate(vector.x, vector.y, vector.z);
    //         dotGeometries.push(dotGeometry);
    //     }
    // }

    const mergeDotGeometries = BufferGeometryUtils.mergeBufferGeometries(dotGeometries);
    const dotMaterial =  new THREE.MeshBasicMaterial({
        color: DOT_COLOR,
        side: THREE.DoubleSide
    });

    const dotMesh = new THREE.Mesh(mergeDotGeometries, dotMaterial);
    
    scene.add(dotMesh);

    const animate = (time)=>{
        time *= 0.001;
        
        dotMesh.rotation.y = time*0.1;
        controls.update();
        renderer.render(scene, camera);
        
        requestAnimationFrame(animate);
    }

    const greetings = document.createElement('div');
    greetings.className = 'absolute top-1/2 left-24 text-white font-poppins bg-transparent';

    
    const name = document.createElement('h1');
    name.innerHTML = 'Samuel Immanuel Herlinton Sibuea';
    name.className = 'pb-5 font-bold text-3xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient drop-shadow-x'

    const greet = document.createElement('p');
    greet.innerHTML = 'Hi, Fellow Stalker! ✋';
    greet.className = 'pb-1 font-bold text-2xl '

    const occupation = document.createElement('p');
    occupation.innerHTML = 'I\'m a Software Engineer';

    occupation.className = 'font-bold text-2xl'

    greetings.appendChild(name);
    greetings.appendChild(greet);
    greetings.appendChild(occupation);    


    const copyright = document.createElement('p');
    copyright.innerHTML = '©Copyright 2024'
    copyright.className = 'absolute bottom-3 left-24 text-white'
    

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
