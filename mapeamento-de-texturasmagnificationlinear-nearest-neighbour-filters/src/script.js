//----------------------------------------------------------------------------
// Nearest Neighbour Filter - Magnification Filter
//----------------------------------------------------------------------------
let image = new Image();
image.src = src_checkerboard;

texture = new THREE.Texture(image);

image.onload = function() {
    texture.needsUpdate = true;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.anisotropy = 1;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
};

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 100);
camera.position.z = 1.3;

scene.add(camera);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.left = "10px";
renderer.domElement.style.top = "40px";
renderer.domElement.style.border = "1px solid DarkSlateGray"

let controls = new THREE.OrbitControls(camera, renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);

//----------------------------------------------------------------------------
// Criação das fontes de luz pontuais (uma, mais clara, à frente e outra, 
// mais escura, atrás do cubo).
//----------------------------------------------------------------------------
var point_light = new THREE.PointLight(0xffffff);
point_light.position.set(-10, 15, 20);
scene.add(point_light);

var point_light = new THREE.PointLight(0x666666);
point_light.position.set(10, -10, -10);
scene.add(point_light);

//----------------------------------------------------------------------------
// Criação do material difuso. A textura define a reflectância difusa (k_d) 
// do material.
//----------------------------------------------------------------------------
let material = new THREE.MeshLambertMaterial({
    map: texture
});

var object_mesh = new THREE.Mesh(geometry, material);
scene.add(object_mesh);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();




//----------------------------------------------------------------------------
// LinearFilter - Magnification Filter
//----------------------------------------------------------------------------
let image2 = new Image();
image2.src = src_checkerboard;

texture2 = new THREE.Texture(image2);

image2.onload = function() {
    texture2.needsUpdate = true;
    texture2.magFilter = THREE.LinearFilter;
    texture2.minFilter = THREE.NearestFilter;
    texture2.anisotropy = 1;
    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;
};

let scene2 = new THREE.Scene();

let camera2 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 100);
camera2.position.z = 1.3;

scene2.add(camera2);

let renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(400, 300);
document.body.appendChild(renderer2.domElement);
renderer2.domElement.style.position = "absolute";
renderer2.domElement.style.left = "400px";
renderer2.domElement.style.top = "40px";
renderer2.domElement.style.border = "1px solid DarkSlateGray"

let controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);

let geometry2 = new THREE.BoxGeometry(1, 1, 1);

//----------------------------------------------------------------------------
// Criação das fontes de luz pontuais (uma, mais clara, à frente e outra, 
// mais escura, atrás do cubo).
//----------------------------------------------------------------------------
var point_light2 = new THREE.PointLight(0xffffff);
point_light2.position.set(-10, 15, 20);
scene2.add(point_light2);

var point_light2 = new THREE.PointLight(0x666666);
point_light2.position.set(10, -10, -10);
scene2.add(point_light2);

//----------------------------------------------------------------------------
// Criação do material difuso. A textura define a reflectância difusa (k_d) 
// do material.
//----------------------------------------------------------------------------
let material2 = new THREE.MeshLambertMaterial({
    map: texture2
});

var object_mesh2 = new THREE.Mesh(geometry2, material2);
scene2.add(object_mesh2);

function render2() {
  requestAnimationFrame(render2);
  renderer2.render(scene2, camera2);
}

render2();

