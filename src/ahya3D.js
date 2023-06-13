import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';
import gsap from 'gsap';

let camera, scene, renderer;
let controls;


const sceneCount = 3
const cameraPosition = [
    { x: -25.89, y: 0, z: 808.5 },
    { x: 990, y: 0, z: 808.5 },
    { x: 1980, y: 0, z: 808.5 }
]
const controlsTarget = [
    { x: 0, y: 0, z: 0 },
    { x: 990, y: 0, z: 0 },
    { x: 1980, y: 0, z: 0 },
]
const zoominZ = 745.5;

let currentX = cameraPosition[0].x;
let currentScene = 0;
const duration = 0.5;
let ishoverble = true;

function init3D() {

    const ahya3D = document.getElementById('ahya3D');
    const ahya3DWidth = ahya3D.clientWidth;
    const ahya3DHeight = ahya3D.clientHeight;

    camera = new THREE.PerspectiveCamera(45, ahya3DWidth / ahya3DHeight, 5, 100000);
    camera.position.set(cameraPosition[0].x, cameraPosition[0].y, cameraPosition[0].z);
    camera.quaternion.setFromEuler(new THREE.Euler(0.01, -0.03, 0));

    // scene
    scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
        'https://prod.spline.design/oNQSe5kICABsuC8P/scene.splinecode',
        (splineScene) => {
            scene.add(splineScene);
        }
    );

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(ahya3DWidth, ahya3DHeight);
    renderer.setAnimationLoop(animate);
    ahya3D.appendChild(renderer.domElement);
    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color('#0e1827');
    renderer.setClearAlpha(1);

    // orbit controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;
    controls.enabled = false;

    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
        let ahya3DWidth = ahya3D.clientWidth;
        let ahya3DHeight = ahya3D.clientHeight;
        camera.aspect = ahya3DWidth / ahya3DHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(ahya3DWidth, ahya3DHeight);
    }
    function animate(time) {
        controls.update();
        renderer.render(scene, camera);
    }


    ////////////////////////////////////////


    window.addEventListener('mousemove', (e) => {
        if (ishoverble) {
            let x = e.clientX / window.innerWidth - 0.602
            let y = e.clientY / window.innerHeight - 0.42
            camera.position.x = currentX + x * 600;
            camera.position.y = cameraPosition[0].y + y * 600;
        }
    })
    ahya3D.children[0].addEventListener('mouseenter', () => {
        gsap.to(camera.position, { z: zoominZ, duration: duration });
    })
    ahya3D.children[0].addEventListener('mouseleave', () => {
        gsap.to(camera.position, { z: cameraPosition[0].z, duration: duration });
    })

    window.addEventListener('keydown', (e) => {
        // console.log(e.code);
        // if (e.code == 'KeyD') {
        //     camera.position.x += 10;
        //     controls.target.x += 10;
        //     console.log(camera.position.x, controls.target.x);
        // } else if (e.code == 'KeyA') {
        //     camera.position.x -= 10;
        //     controls.target.x -= 10;
        //     console.log(camera.position.x, controls.target.x);
        // }
        if (e.code == 'KeyD') {
            nextScene()
        } else if (e.code == 'KeyA') {
            backScene()
        }
    })
}

const nextScene = () => {
    if (currentScene == cameraPosition.length - 1) {
        currentScene = 0;
    } else {
        currentScene++;
    }
    ishoverble = false;
    currentX = cameraPosition[currentScene].x;
    gsap.to(camera.position, {
        x: cameraPosition[currentScene].x, duration: duration, onComplete() {
            ishoverble = true;
        }
    });
    gsap.to(controls.target, { x: controlsTarget[currentScene].x, duration: duration });
}
const backScene = () => {
    if (currentScene == 0) {
        currentScene = cameraPosition.length - 1;
    } else {
        currentScene--;
    }
    ishoverble = false;
    currentX = cameraPosition[currentScene].x;
    gsap.to(camera.position, {
        x: cameraPosition[currentScene].x, duration: duration, onComplete() {
            ishoverble = true;
        }
    });
    gsap.to(controls.target, { x: controlsTarget[currentScene].x, duration: duration });
}

export { init3D, nextScene }