import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

let scrollY = window.scrollY
window.addEventListener('scroll', () => {
    scrollY = window.scrollY
})

const initCVThreeJS = (obj) => {

    const backgroundIMG = require("@/assets/backgroundCV.jpg")
    const pillarIMG = require("@/assets/marbelTexture.jpg")

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

    const loader = new THREE.TextureLoader();
    scene.background = loader.load(backgroundIMG);
    scene.background.encoding = THREE.sRGBEncoding;

    const MarbelTexture = loader.load(pillarIMG)
    MarbelTexture.encoding = THREE.sRGBEncoding

    const marbel = new THREE.MeshBasicMaterial({ map: MarbelTexture })

    // Base camera
    let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    scene.add(camera)

    const objLoader = new OBJLoader()
    let sectionMeshes = []

    /*objLoader.load(
        '${this.publicPath}/assets/3d/pillar.obj',
        (object) => {
            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    sectionMeshes.push(child)
                    child.material = marbel;
                }
            });
            object.position.y = 0
            object.position.x = 0
            object.position.z = 0
            object.rotation.y = 0
            scene.add(object)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )*/

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
