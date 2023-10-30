import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

let scrollY = window.scrollY
window.addEventListener('scroll', () => {
    scrollY = window.scrollY
})

const initCVThreeJS = () => {

    const backgroundIMG = require("@/assets/background.jpg")

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    //Renderer
    let renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('webglCV'),
        antialias: true,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Scene
    let scene = new THREE.Scene()

    scene.background = new THREE.Color(0x000000);

    // Base camera
    let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    scene.add(camera)

    const objLoader = new OBJLoader()
    let sectionMeshes = []

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 1
    scene.add(cube);


    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {

        sizes.width = window.innerWidth,
            sizes.height = window.innerHeight

        if (camera != null) {
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
        }

        if (renderer != null && scene != null && camera != null) {
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.render(scene, camera)
        }
    }

    //Animation
    const clock = new THREE.Clock()
    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        for (const mesh of sectionMeshes) {
            mesh.rotation.x = elapsedTime * 0.08
            mesh.rotation.y = elapsedTime * 0.05
        }

        // Animate camera
        if (camera != null)
            camera.position.y = - scrollY / sizes.height * 4.5

        // Render
        if (renderer != null && scene != null && camera != null)
            renderer.render(scene, camera)

        // Call tick again on the next frame

        if (window.location.href.includes("curriculum")) {
            window.requestAnimationFrame(tick)
        }
        else {
            scene = null
            renderer = null
            camera = null
        }
    }

    tick()

}

export default initCVThreeJS;
