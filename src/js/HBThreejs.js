import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { Vector2 } from "three"

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import RenderPixelatedPass from "./RenderPixelatedPass"

let sectionMeshes = [];
let mask;
let scene;
let maskSkinBlack;
let maskSkinColor;

let scrollY = window.scrollY
window.addEventListener('scroll', () => {
  scrollY = window.scrollY
})

function pixelTex( tex ) {
  tex.minFilter = THREE.NearestFilter
  tex.magFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  return tex
}

const initHBThreeJS = () => {

  const maskBlackIMG = require("@/assets/MaskBlack.png")
  const maskColorIMG = require("@/assets/MaskColor.png")

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  let screenResolution = new Vector2( window.innerWidth, window.innerHeight )
  let renderResolution = screenResolution.clone().divideScalar( 4 )
  renderResolution.x |= 0
  renderResolution.y |= 0

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
  scene = new THREE.Scene()

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

  const maskColorTexture = pixelTex(loader.load(maskColorIMG))
  maskColorTexture.encoding = THREE.sRGBEncoding;
  maskColorTexture.flipY = false;

  const maskBlackTexture = pixelTex(loader.load(maskBlackIMG))
  maskBlackTexture.encoding = THREE.sRGBEncoding;
  maskBlackTexture.flipY = false;

  maskSkinColor = new THREE.MeshPhongMaterial({ map: maskColorTexture, transparent: true })
  maskSkinColor.opacity = 0

  maskSkinBlack = new THREE.MeshPhongMaterial({ map: maskBlackTexture, transparent: true })

  //GLTF
  let model;
  const gltfLoader = new GLTFLoader()

  gltfLoader.load(
    'maskAifa2.gltf',
    (obj) => {
      model = obj.scene

      console.log(model)

      model.children[0].material = maskSkinColor
      model.children[1].material = maskSkinColor
      model.children[2].material = maskSkinColor

      mask = model.children[0]
      sectionMeshes[0] = model.children[1]
      sectionMeshes[1] = model.children[2]

      scene.add(model)
      controls.update()
    }
  )

  //Composer
  let composer = new EffectComposer( renderer )
  composer.addPass( new RenderPixelatedPass( renderResolution, scene, camera ) )

  //Light
      // Lights
      let directionalLight = new THREE.DirectionalLight( 0xffffff, 10 )
      directionalLight.position.set( 0, 10, -10 )
      scene.add( directionalLight )

      let directionalLight2 = new THREE.DirectionalLight( 0xffffff, 3 )
      directionalLight2.position.set( 0, 2, 10 )
      scene.add( directionalLight2 )

      let directionalLight3 = new THREE.DirectionalLight( 0xffffff, 3 )
      directionalLight3.position.set( 0, -10, -5 )
      scene.add( directionalLight3 )

  //Animation
  const clock = new THREE.Clock()

  const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    if (maskSkinColor.opacity != 1) {
      maskSkinColor.opacity += 0.03
    }

    sectionMeshes.forEach(element => {
      element.rotation.z = Math.cos(elapsedTime) * 0.2
    });

    //controls.update();
    composer.render()

    // Call tick again on the next frame
    if (!window.location.href.includes("curriculum") && !window.location.href.includes("portfolio") && !window.location.href.includes("projet")) {
      window.requestAnimationFrame(tick)
    }
    else {
      console.log("HB : Scene destroy")
      scene = null
      renderer = null
      camera = null
      controls = null
    }
  }

  //Gestion bouton
  const changeToUV = () => {
      mask.material = maskSkinBlack;
      sectionMeshes.forEach(element => {
        element.material = maskSkinBlack;
      });
      scene.background = new THREE.Color(0x000000);

      let uvColor = 0x9824ff

      directionalLight.color.setHex( uvColor );
      directionalLight2.color.setHex( uvColor );
      directionalLight3.color.setHex( uvColor );

      directionalLight.intensity = 25
      directionalLight2.intensity = 10
      directionalLight3.intensity = 10

      document.getElementById("switchMode").removeEventListener("click", changeToUV)
      document.getElementById("switchMode").addEventListener("click", changeToColor)
      document.getElementById("switchMode").innerText = "UV Light : ON"
  }

  const changeToColor = () => {
    mask.material = maskSkinColor;
    sectionMeshes.forEach(element => {
      element.material = maskSkinColor;
    });
    scene.background = new THREE.Color(0x6e918b);

    let lightColor = 0xffffff

    directionalLight.color.setHex( lightColor );
    directionalLight2.color.setHex( lightColor );
    directionalLight3.color.setHex( lightColor );

    directionalLight.intensity = 10
    directionalLight2.intensity = 3
    directionalLight3.intensity = 3

    document.getElementById("switchMode").removeEventListener("click", changeToColor)
    document.getElementById("switchMode").addEventListener("click", changeToUV)
    document.getElementById("switchMode").innerText = "UV Light : OFF"
}

  document.getElementById("switchMode").addEventListener("click", changeToUV)

  tick()

}

export default initHBThreeJS;
