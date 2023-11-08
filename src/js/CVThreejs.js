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

    // Base camera
    let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    scene.add(camera)

    //Loader & Textures
    const loader = new THREE.TextureLoader();
    scene.background = loader.load(backgroundIMG);
    scene.background.encoding = THREE.sRGBEncoding;

    const MarbelTexture = loader.load(pillarIMG)

    const marbel = new THREE.MeshBasicMaterial({ map: MarbelTexture })

    //OBJ
    const objLoader = new OBJLoader()
    let sectionMeshes = []

    objLoader.load(
        'pillar.obj',
        (object) => {
            const object2 = object.clone()
            const object3 = object.clone()
            const object4 = object.clone()

            object.position.x = -3
            object.position.y = 0.5
            object.position.z = 1
            object.rotation.z = - Math.PI / 6
            object.scale.y = 2

            object2.position.x = 3.5
            object2.position.y = -7
            object2.rotation.z = Math.PI / 8
            object2.rotation.y = Math.PI / 10

            object3.position.y = -17
            object3.position.z = -1
            object3.position.x = -3.5
            object3.rotation.z = - Math.PI / 8
            object3.rotation.y = - Math.PI / 6

            object4.position.y = -31
            object4.rotation.z = - Math.PI / 4
            object4.rotation.y = - Math.PI / 6
            object4.position.z = -6

            scene.add(object)
            scene.add(object2)
            scene.add(object3)
            scene.add(object4)

            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    sectionMeshes.push(child)
                    child.material = marbel;
                }
            });
            object2.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    sectionMeshes.push(child)
                    child.material = marbel;
                }
            });
            object3.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    sectionMeshes.push(child)
                    child.material = marbel;
                }
            });
            object4.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    sectionMeshes.push(child)
                    child.material = marbel;
                }
            });
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    //LIGHT
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
    directionalLight.rotation.y = Math.PI / 2
    scene.add( directionalLight );

    //Resize
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {

        sizes.width = window.innerWidth,
            sizes.height = window.innerHeight

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.render(scene, camera)
    }

    //Animation
    const clock = new THREE.Clock()
    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        for (const mesh of sectionMeshes) {

            mesh.rotation.y = elapsedTime * 0.05
        }

        // Animate camera
            camera.position.y = - scrollY / sizes.height * 4.5

        // Render
            renderer.render(scene, camera)

        // Call tick again on the next frame

        if (window.location.href.includes("curriculum")) {
            window.requestAnimationFrame(tick)
        }
        else {
            console.log("CV : Scene destroy")
            scene = null
            renderer = null
            camera = null
        }
    }

    tick()

}

export default initCVThreeJS;
