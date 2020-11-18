(scene = new THREE.Scene).fog = new THREE.FogExp2(10842,.001);
var wiw = window.innerWidth, 
    wih = window.innerHeight;
(camera = new THREE.PerspectiveCamera(75,wiw / wih,1,2e3)).position.set(0, 0, 1e3),
renderer = new THREE.WebGLRenderer({
    alpha: !1,
    antialias: !1,
    precision: "lowp",
    canvas: document.createElement("canvas")
}),
Math.min(2, window.devicePixelRatio),
renderer.setPixelRatio(1),
renderer.setSize(t, e),
renderer.setClearColor(10842, 1),
wrap = new THREE.Group,
scene.add(wrap);
for (var i, n = new THREE.BufferGeometry, r = [], s = new THREE.TextureLoader, a = s.load("/assets/img/bg/tex1.png"), o = s.load("/assets/img/bg/tex2.png"), h = s.load("/assets/img/bg/tex3.png"), c = 0; c < 30; c++) {
    var l = d.r(130, 800) * (d.r(0, 1) > .5 ? 1 : -1)
        , u = d.r(130, 800) * (d.r(0, 1) > .5 ? 1 : -1)
        , f = d.r(130, 800) * (d.r(0, 1) > .5 ? 1 : -1);
    r.push(l, u, f)
}
n.setAttribute("position", new THREE.Float32BufferAttribute(r,3)),
parameters = [[a, .3], [o, .3], [h, .3], [a, .15], [o, .15]],
particlesArr = [],
materialsArr = [];
for (var p = 0, v = parameters.length; p < v; p++) {
    var g = parameters[p][0]
        , b = parameters[p][1];
    materialsArr[p] = new THREE.PointsMaterial({
        size: 100 * b,
        map: g,
        blending: THREE.AdditiveBlending,
        depthTest: !1,
        transparent: !0
    });
    var m = new THREE.Points(n,materialsArr[p]);
    m.rotation.x = d.r(-180, 180) * d.RAD,
    m.rotation.y = d.r(-180, 180) * d.RAD,
    m.rotation.z = d.r(-180, 180) * d.RAD,
    wrap.add(m),
    particlesArr.push(m)
}
bg_scene = new THREE.Scene,
bg_camera = new THREE.Camera,
camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,.1,1e3),
camera.position.z = 0,
M.isSPView ? bg_texture = THREE.ImageUtils.loadTexture("/assets/img/bg/bg_most_sp.jpg", {}, show()) : bg_texture = THREE.ImageUtils.loadTexture("/assets/img/bg/bg_most.jpg", {}, show()),
i = M.isSPView ? new THREE.MeshBasicMaterial({
    map: bg_texture
}) : new THREE.MeshLambertMaterial({
    map: bg_texture
}),
bg_mesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2,0),i),
bg_mesh.material.depthTest = !1,
bg_mesh.material.depthWrite = !1,
bg_scene.add(bg_camera),
bg_scene.add(bg_mesh),
M.isSPView || (bg_light = new THREE.SpotLight(16777215,2,100,Math.PI / 6,.4),
bg_scene.add(bg_light))