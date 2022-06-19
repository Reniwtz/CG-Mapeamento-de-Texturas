//----------------------------------------------------------------------------
// Nearests Neighbour Filter - 1x - Minification Filter
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
// Nearests Neighbour Filter - 2x - Minification Filter
//----------------------------------------------------------------------------
let image2 = new Image();
image2.src = src_checkerboard;

texture2 = new THREE.Texture(image2);

image2.onload = function() {
    texture2.needsUpdate = true;
    texture2.magFilter = THREE.NearestFilter;
    texture2.minFilter = THREE.NearestFilter;
    texture2.anisotropy = 2;
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




//----------------------------------------------------------------------------
// Nearests Neighbour Filter - 4x - Minification Filter
//----------------------------------------------------------------------------
let image3 = new Image();
image3.src = src_checkerboard;

texture3 = new THREE.Texture(image3);

image3.onload = function() {
    texture3.needsUpdate = true;
    texture3.magFilter = THREE.NearestFilter;
    texture3.minFilter = THREE.NearestFilter;
    texture3.anisotropy = 4;
    texture3.wrapS = THREE.RepeatWrapping;
    texture3.wrapT = THREE.RepeatWrapping;
};

let scene3 = new THREE.Scene();

let camera3 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 100);
camera3.position.z = 1.3;

scene3.add(camera3);

let renderer3 = new THREE.WebGLRenderer();
renderer3.setSize(400, 300);
document.body.appendChild(renderer3.domElement);
renderer3.domElement.style.position = "absolute";
renderer3.domElement.style.left = "800px";
renderer3.domElement.style.top = "40px";
renderer3.domElement.style.border = "1px solid DarkSlateGray"

let controls3 = new THREE.OrbitControls(camera3, renderer3.domElement);

let geometry3 = new THREE.BoxGeometry(1, 1, 1);

//----------------------------------------------------------------------------
// Criação das fontes de luz pontuais (uma, mais clara, à frente e outra, 
// mais escura, atrás do cubo).
//----------------------------------------------------------------------------
var point_light3 = new THREE.PointLight(0xffffff);
point_light3.position.set(-10, 15, 20);
scene3.add(point_light3);

var point_light3 = new THREE.PointLight(0x666666);
point_light3.position.set(10, -10, -10);
scene3.add(point_light3);

//----------------------------------------------------------------------------
// Criação do material difuso. A textura define a reflectância difusa (k_d) 
// do material.
//----------------------------------------------------------------------------
let material3 = new THREE.MeshLambertMaterial({
    map: texture3
});

var object_mesh3 = new THREE.Mesh(geometry3, material3);
scene3.add(object_mesh3);

function render3() {
  requestAnimationFrame(render3);
  renderer3.render(scene3, camera3);
}

render3();




//----------------------------------------------------------------------------
// Nearests Neighbour Filter - 8x - Minification Filter
//----------------------------------------------------------------------------
let image4 = new Image();
image4.src = src_checkerboard;

texture4 = new THREE.Texture(image4);

image4.onload = function() {
    texture4.needsUpdate = true;
    texture4.magFilter = THREE.NearestFilter;
    texture4.minFilter = THREE.NearestFilter;
    texture4.anisotropy = 8;
    texture4.wrapS = THREE.RepeatWrapping;
    texture4.wrapT = THREE.RepeatWrapping;
};

let scene4 = new THREE.Scene();

let camera4 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 100);
camera4.position.z = 1.3;

scene4.add(camera4);

let renderer4 = new THREE.WebGLRenderer();
renderer4.setSize(400, 300);
document.body.appendChild(renderer4.domElement);
renderer4.domElement.style.position = "absolute";
renderer4.domElement.style.left = "10px";
renderer4.domElement.style.top = "400px";
renderer4.domElement.style.border = "1px solid DarkSlateGray"

let controls4 = new THREE.OrbitControls(camera4, renderer4.domElement);

let geometry4 = new THREE.BoxGeometry(1, 1, 1);

//----------------------------------------------------------------------------
// Criação das fontes de luz pontuais (uma, mais clara, à frente e outra, 
// mais escura, atrás do cubo).
//----------------------------------------------------------------------------
var point_light4 = new THREE.PointLight(0xffffff);
point_light4.position.set(-10, 15, 20);
scene4.add(point_light4);

var point_light4 = new THREE.PointLight(0x666666);
point_light4.position.set(10, -10, -10);
scene4.add(point_light4);

//----------------------------------------------------------------------------
// Criação do material difuso. A textura define a reflectância difusa (k_d) 
// do material.
//----------------------------------------------------------------------------
let material4 = new THREE.MeshLambertMaterial({
    map: texture4
});

var object_mesh4 = new THREE.Mesh(geometry4, material4);
scene4.add(object_mesh4);

function render4() {
  requestAnimationFrame(render4);
  renderer4.render(scene4, camera4);
}

render4();




//----------------------------------------------------------------------------
// Nearests Neighbour Filter - 16x - Minification Filter
//----------------------------------------------------------------------------
let image5 = new Image();
image5.src = src_checkerboard;

texture5 = new THREE.Texture(image5);

image5.onload = function() {
    texture5.needsUpdate = true;
    texture5.magFilter = THREE.NearestFilter;
    texture5.minFilter = THREE.NearestFilter;
    texture5.anisotropy = 16;
    texture5.wrapS = THREE.RepeatWrapping;
    texture5.wrapT = THREE.RepeatWrapping;
};

let scene5 = new THREE.Scene();

let camera5 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 100);
camera5.position.z = 1.3;

scene5.add(camera5);

let renderer5 = new THREE.WebGLRenderer();
renderer5.setSize(400, 300);
document.body.appendChild(renderer5.domElement);
renderer5.domElement.style.position = "absolute";
renderer5.domElement.style.left = "400px";
renderer5.domElement.style.top = "400px";
renderer5.domElement.style.border = "1px solid DarkSlateGray"

let controls5 = new THREE.OrbitControls(camera5, renderer5.domElement);

let geometry5 = new THREE.BoxGeometry(1, 1, 1);

//----------------------------------------------------------------------------
// Criação das fontes de luz pontuais (uma, mais clara, à frente e outra, 
// mais escura, atrás do cubo).
//----------------------------------------------------------------------------
var point_light5 = new THREE.PointLight(0xffffff);
point_light5.position.set(-10, 15, 20);
scene5.add(point_light5);

var point_light5 = new THREE.PointLight(0x666666);
point_light5.position.set(10, -10, -10);
scene5.add(point_light5);

//----------------------------------------------------------------------------
// Criação do material difuso. A textura define a reflectância difusa (k_d) 
// do material.
//----------------------------------------------------------------------------
let material5 = new THREE.MeshLambertMaterial({
    map: texture5
});

var object_mesh5 = new THREE.Mesh(geometry5, material5);
scene5.add(object_mesh5);

function render5() {
  requestAnimationFrame(render5);
  renderer5.render(scene5, camera5);
}

render5();




//----------------------------------------------------------------------------
// Nearests Neighbour Filter - 32x - Minification Filter
//----------------------------------------------------------------------------
let image6 = new Image();
image6.src = src_checkerboard;

texture6 = new THREE.Texture(image6);

image6.onload = function() {
    texture6.needsUpdate = true;
    texture6.magFilter = THREE.NearestFilter;
    texture6.minFilter = THREE.NearestFilter;
    texture6.anisotropy = 32;
    texture6.wrapS = THREE.RepeatWrapping;
    texture6.wrapT = THREE.RepeatWrapping;
};

let scene6 = new THREE.Scene();

let camera6 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 100);
camera6.position.z = 1.3;

scene6.add(camera6);

let renderer6 = new THREE.WebGLRenderer();
renderer6.setSize(400, 300);
document.body.appendChild(renderer6.domElement);
renderer6.domElement.style.position = "absolute";
renderer6.domElement.style.left = "800px";
renderer6.domElement.style.top = "400px";
renderer6.domElement.style.border = "1px solid DarkSlateGray"

let controls6 = new THREE.OrbitControls(camera6, renderer6.domElement);

let geometry6 = new THREE.BoxGeometry(1, 1, 1);

//----------------------------------------------------------------------------
// Criação das fontes de luz pontuais (uma, mais clara, à frente e outra, 
// mais escura, atrás do cubo).
//----------------------------------------------------------------------------
var point_light6 = new THREE.PointLight(0xffffff);
point_light6.position.set(-10, 15, 20);
scene6.add(point_light6);

var point_light6 = new THREE.PointLight(0x666666);
point_light6.position.set(10, -10, -10);
scene6.add(point_light6);

//----------------------------------------------------------------------------
// Criação do material difuso. A textura define a reflectância difusa (k_d) 
// do material.
//----------------------------------------------------------------------------
let material6 = new THREE.MeshLambertMaterial({
    map: texture6
});

var object_mesh6 = new THREE.Mesh(geometry6, material6);
scene6.add(object_mesh6);

function render6() {
  requestAnimationFrame(render6);
  renderer6.render(scene6, camera6);
}

render6();