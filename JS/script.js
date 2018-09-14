var angle = 0;
var metal;
var lambo;

function preload() {
	metal = loadImage('Car/Texture.png');
	lambo = loadModel('Car/Avent.obj');
}

function setup() {
	createCanvas(100, 100, WEBGL);
}

function draw() {
	background(200);
	//ambientLight(255, 0, 255);
	//directionalLight(255, 255, 255, 0, 0, 1);
	rotateY(angle * 1.3);
	translate(0, 0, 0);
	texture(metal);
	model(lambo);
	angle += 0.03;
}
