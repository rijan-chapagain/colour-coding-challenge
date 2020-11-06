/**
 * This is a p5 js function.
 * Creates canvas, button
 * Calls generate function on mouse pressed
 */
function setup() {
	createCanvas(width, height);
	background(0);

	button = createButton('Generate colours');
	button.mousePressed(generate);
}

/**
 * This is a p5 js function that renders every time new object is generated
 */
function draw() {
	updatePixels();
}