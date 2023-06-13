import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';
import { Vector3 } from 'three';
export default function BG() {
    // camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 70, 100000);
    camera.position.set(-3923.93, 3518.31, 236.1);
    camera.quaternion.setFromEuler(new THREE.Euler(-2.22, -0.9, -2.34));

    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
        'https://prod.spline.design/Hr3aAXP04C3-e4aX/scene.splinecode',
        (splineScene) => {
            scene.add(splineScene);
        }
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);

    document.getElementById('threeBG').appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color('#0a101d');
    renderer.setClearAlpha(1);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;
    controls.target = new Vector3(1016.67,2295.78,1345.9)
    controls.enabled = false

    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('mousemove',(e)=>{
        let x = e.clientX / window.innerWidth -0.5
        let y = e.clientY / window.innerHeight -0.5
        camera.position.x = -3923.93+x*70
        camera.position.y = 3518.31+y*70
        controls.target.x = 1016.67 + x*200
        controls.target.y = 2295.78 + y*200
    })
    window.addEventListener('keydown',(e)=>{
        if(e.key == 'i'){
            console.log(camera.position);
            console.log(controls.target);
        }
    })
    function animate(time) {
        controls.update();
        renderer.render(scene, camera);
    }
}

// //x
// : 
// 5316.875416995305
// y
// : 
// 1641.9291990153627
// z
// : 
// 4003.3376056275088


