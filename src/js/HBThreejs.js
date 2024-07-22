import * as THREE from 'three'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


let scrollY = window.scrollY
window.addEventListener('scroll', () => {
  scrollY = window.scrollY
})

const initHBThreeJS = () => {

  const maskBlackIMG = require("@/assets/MaskBlack.png")
  const maskColorIMG = require("@/assets/MaskColor.png")

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  //Renderer
  let renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('webglHB'),
    antialias: true,
    alpha: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping


  // Scene
  let scene = new THREE.Scene()

  scene.background = new THREE.Color(0x6e918b);

  // Base camera
  let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.001, 10000 )
  camera.position.z = -4
  scene.add(camera)

  const controls = new OrbitControls( camera, renderer.domElement );

  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {

    sizes.width = window.innerWidth,
      sizes.height = window.innerHeight

    if (camera != null) {
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
    }

    if (renderer != null) {
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.render(scene, camera)
    }
  }

  //Loader & Textures
  const loader = new THREE.TextureLoader();

  const maskColorTexture = loader.load(maskColorIMG)
  maskColorTexture.encoding = THREE.sRGBEncoding;

  const maskBlackTexture = loader.load(maskBlackIMG)
  maskBlackTexture.encoding = THREE.sRGBEncoding;


  const maskSkin = new THREE.MeshBasicMaterial({ map: maskColorTexture, transparent: true })
  maskSkin.opacity = 0

  //GLTF
  let model;
  const objLoader = new OBJLoader()
  let sectionMeshes = []

  objLoader.load(
    'maskAifa2.obj',
    (obj) => {
      model = obj

      model.children[0].material = maskSkin
      model.children[1].material = maskSkin
      model.children[2].material = maskSkin

      sectionMeshes[0] = (model.children[1])
      sectionMeshes[1] = (model.children[2])

      scene.add(model)
      controls.update()
    }
  )


  //Animation
  const clock = new THREE.Clock()

  const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    if (maskSkin.opacity != 1) {
      maskSkin.opacity += 0.03
    }

    sectionMeshes.forEach(element => {
      element.rotation.z = Math.cos(elapsedTime) * 0.1
    });

    controls.update();

    // Call tick again on the next frame
    if (!window.location.href.includes("curriculum") && !window.location.href.includes("portfolio") && !window.location.href.includes("projet")) {
      window.requestAnimationFrame(tick)
    }
    else {
      console.log("HP : Scene destroy")
      scene = null
      renderer = null
      camera = null
      controls = null
    }
  }

  tick()

}

export default initHBThreeJS;
