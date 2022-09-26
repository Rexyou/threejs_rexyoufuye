// Source (Thanks to Google and Youtube)
// https://www.youtube.com/watch?v=8pEKs8ddetw&ab_channel=SardorCodes
// https://medium.com/aratta-studios/three-js-tutorial-how-to-make-a-periodic-table-99be4c772117

let table = [];
let currentTable = [];

const userAction = async () => {
    const response = await fetch('https://random-data-api.com/api/v2/users?size=96&is_xml=true');
    const finalResponse = await response.json(); //extract JSON from the http response

    return finalResponse

}

const processData = async () => {

    const sample = await userAction();
    
    let rowNum = 1;
    let columnNum = 1;

    sample.map((item)=>{

        // Gender filter
        let gender = "";

        switch(item.gender){
            case "Male":
                gender = "M";
                break;
            case "Female":
                gender = "F";
                break;
            default:
                var genderList = Array('F', 'M');
                gender = genderList[Math.floor(Math.random()*genderList.length)];
        }

        const dob = item.date_of_birth;

        const ms = new Date().getTime() - new Date(dob).getTime();

        const date = new Date(ms);

        let age = Math.abs(date.getUTCFullYear() - 1970);

        currentTable.push(gender);
        currentTable.push(item.first_name);
        currentTable.push(age);
        currentTable.push(rowNum);
        currentTable.push(columnNum);

        if(rowNum < 13){
            rowNum++;
        }

        if(rowNum >= 13){
            rowNum = 1;
            columnNum++;
        }
    })

    return currentTable 


}

// table = currentTable ? currentTable : backupTable;
// console.log(currentTable);
// console.log(backupTable);

const backupTable = [
    "M", "hahiaa", 23, 1, 1,
    "F", "hahiaa", 23, 2, 1,
    "M", "hahiaa", 23, 3, 1,
    "F", "hahiaa", 23, 4, 1,
    "M", "hahiaa", 23, 5, 1,
    "F", "hahiaa", 23, 6, 1,
    "M", "hahiaa", 23, 7, 1,
    "F", "hahiaa", 23, 8, 1,
    "M", "hahiaa", 23, 9, 1,
    "F", "hahiaa", 23, 10, 1,
    "M", "hahiaa", 23, 11, 1,
    "F", "hahiaa", 23, 12, 1,
    "F", "hahiaa", 23, 1, 2,
    "M", "hahiaa", 23, 2, 2,
    "F", "hahiaa", 23, 3, 2,
    "M", "hahiaa", 23, 4, 2,
    "F", "hahiaa", 23, 5, 2,
    "M", "hahiaa", 23, 6, 2,
    "F", "hahiaa", 23, 7, 2,
    "M", "hahiaa", 23, 8, 2,
    "F", "hahiaa", 23, 9, 2,
    "M", "hahiaa", 23, 10, 2,
    "F", "hahiaa", 23, 11, 2,
    "M", "hahiaa", 23, 12, 2,
    "M", "hahiaa", 23, 1, 3,
    "F", "hahiaa", 23, 2, 3,
    "M", "hahiaa", 23, 3, 3,
    "F", "hahiaa", 23, 4, 3,
    "M", "hahiaa", 23, 5, 3,
    "F", "hahiaa", 23, 6, 3,
    "M", "hahiaa", 23, 7, 3,
    "F", "hahiaa", 23, 8, 3,
    "M", "hahiaa", 23, 9, 3,
    "F", "hahiaa", 23, 10, 3,
    "M", "hahiaa", 23, 11, 3,
    "F", "hahiaa", 23, 12, 3,
    "F", "hahiaa", 23, 1, 4,
    "M", "hahiaa", 23, 2, 4,
    "F", "hahiaa", 23, 3, 4,
    "M", "hahiaa", 23, 4, 4,
    "F", "hahiaa", 23, 5, 4,
    "M", "hahiaa", 23, 6, 4,
    "F", "hahiaa", 23, 7, 4,
    "M", "hahiaa", 23, 8, 4,
    "F", "hahiaa", 23, 9, 4,
    "M", "hahiaa", 23, 10, 4,
    "F", "hahiaa", 23, 11, 4,
    "M", "hahiaa", 23, 12, 4,
    "M", "hahiaa", 23, 1, 5,
    "F", "hahiaa", 23, 2, 5,
    "M", "hahiaa", 23, 3, 5,
    "F", "hahiaa", 23, 4, 5,
    "M", "hahiaa", 23, 5, 5,
    "F", "hahiaa", 23, 6, 5,
    "M", "hahiaa", 23, 7, 5,
    "F", "hahiaa", 23, 8, 5,
    "M", "hahiaa", 23, 9, 5,
    "F", "hahiaa", 23, 10, 5,
    "M", "hahiaa", 23, 11, 5,
    "F", "hahiaa", 23, 12, 5,
    "F", "hahiaa", 23, 1, 6,
    "M", "hahiaa", 23, 2, 6,
    "F", "hahiaa", 23, 3, 6,
    "M", "hahiaa", 23, 4, 6,
    "F", "hahiaa", 23, 5, 6,
    "M", "hahiaa", 23, 6, 6,
    "F", "hahiaa", 23, 7, 6,
    "M", "hahiaa", 23, 8, 6,
    "F", "hahiaa", 23, 9, 6,
    "M", "hahiaa", 23, 10, 6,
    "F", "hahiaa", 23, 11, 6,
    "M", "hahiaa", 23, 12, 6,
    "M", "hahiaa", 23, 1, 7,
    "F", "hahiaa", 23, 2, 7,
    "M", "hahiaa", 23, 3, 7,
    "F", "hahiaa", 23, 4, 7,
    "M", "hahiaa", 23, 5, 7,
    "F", "hahiaa", 23, 6, 7,
    "M", "hahiaa", 23, 7, 7,
    "F", "hahiaa", 23, 8, 7,
    "M", "hahiaa", 23, 9, 7,
    "F", "hahiaa", 23, 10, 7,
    "M", "hahiaa", 23, 11, 7,
    "F", "hahiaa", 23, 12, 7,
    "F", "hahiaa", 23, 1, 8,
    "M", "hahiaa", 23, 2, 8,
    "F", "hahiaa", 23, 3, 8,
    "M", "hahiaa", 23, 4, 8,
    "F", "hahiaa", 23, 5, 8,
    "M", "hahiaa", 23, 6, 8,
    "F", "hahiaa", 23, 7, 8,
    "M", "hahiaa", 23, 8, 8,
    "F", "hahiaa", 23, 9, 8,
    "M", "hahiaa", 23, 10, 8,
    "F", "hahiaa", 23, 11, 8,
    "M", "hahiaa", 23, 12, 8,
    "M", "hahiaa", 23, 1, 9,
    "F", "hahiaa", 23, 2, 9,
    "M", "hahiaa", 23, 3, 9,
    "F", "hahiaa", 23, 4, 9,
    "M", "hahiaa", 23, 5, 9,
    "F", "hahiaa", 23, 6, 9,
    "M", "hahiaa", 23, 7, 9,
    "F", "hahiaa", 23, 8, 9,
    "M", "hahiaa", 23, 9, 9,
    "F", "hahiaa", 23, 10, 9,
    "M", "hahiaa", 23, 11, 9,
    "F", "hahiaa", 23, 12, 9,
    "F", "hahiaa", 23, 1, 10,
    "M", "hahiaa", 23, 2, 10,
    "F", "hahiaa", 23, 3, 10,
    "M", "hahiaa", 23, 4, 10,
    "F", "hahiaa", 23, 5, 10,
    "M", "hahiaa", 23, 6, 10,
    "F", "hahiaa", 23, 7, 10,
    "M", "hahiaa", 23, 8, 10,
    "F", "hahiaa", 23, 9, 10,
    "M", "hahiaa", 23, 10, 10,
    "F", "hahiaa", 23, 11, 10,
    "M", "hahiaa", 23, 12, 10,
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone: []};

const sample = async() => {
    table = await processData();
    console.log(table)
}

init();

async function init() {

    table = await processData() ?? backupTable;

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

    animate();

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    table[i] === "M" ? element.style.backgroundColor = "blue" : element.style.backgroundColor = "pink";

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 930;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
        addConeObject(coneVector, i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function addConeObject(coneVector, index) {

    const theta = index * 4 + Math.PI;
    const y = - (index * 12) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(theta, y);

    coneVector.x = object.position.x * 2;
    coneVector.y = object.position.y;
    coneVector.z = object.position.z * 2;

    object.lookAt(coneVector);

    targets.cone.push(object);


}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {
    
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    // composer.render();
}
