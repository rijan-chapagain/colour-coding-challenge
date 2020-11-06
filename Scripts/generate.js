/**
 * This function generates grid of cell object within the canvas 
 * And iterate over 3 for loops to store an array of rgb permutations
 * clear, p5 js fuction, will clear the previous grid 
 */
function generate() {
	clear();

	for (let j = 0; j < height; j++) {
		for (let i = 0; i < width; i++) {
			// let cell = new grid.push(Cell(i, j));
			grid.push(new Cell(i, j));
		}
	}

    for (var r = min; r < max; r += 8) {
		for (var g = min; g < max; g += 8) {
			for (var b = min; b < max; b += 8) {
				colours.push(color(r, g, b));
			}
		}
	}

	console.log("Colours Array: ", colours);

	current = grid[floor(random(0, grid.length))];

	while (colours.length > 0) {
		current.find();

		var next = current.checkNext();
        if (next) 
        {
			stack.push(current);
			current = next;
        }
        else if (stack.length > 0) 
        {
			current = stack.pop();
		}
	}
	
	grid = [];
	colours = [];
}