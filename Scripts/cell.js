/**
 * Cell function handle the cell object instances
 * @param {Number} i 
 * @param {Number} j 
 */
function Cell(i, j) {
	this.i = i;
	this.j = j;
	this.isFilled = false;

    /**
     * find function finds the path in grid
     * find the steps for leftover colours if it is empty
     */
	this.find = function () {
		var x = this.i;
		var y = this.j;

		if (colours.length > 0 && !this.isFilled) {
			let colour = colours.pop();
			set(x, y, colour);
			this.isFilled = true;
		}
	};

	/**
	 * Check the next empty cells and push the colour to it
	 */
	this.checkNext = function () {
		let next = [];

		let top = grid[position(i, j - 1)];
		let right = grid[position(i + 1, j)];
		let bottom = grid[position(i, j + 1)];
		let left = grid[position(i - 1, j)];
		var topRight = grid[position(i + 1, j - 1)];
		var topLeft = grid[position(i - 1, j - 1)];
		var bottomRight = grid[position(i + 1, j + 1)];
		var bottomLeft = grid[position(i - 1, j + 1)];

		if (top && !top.isFilled) {
			next.push(top);
		}
		else if (right && !right.isFilled) {
			next.push(right);
		}
		else if (bottom && !bottom.isFilled) {
			next.push(bottom);
		}
		else if (left && !left.isFilled) {
			next.push(left);
		}
		else if (topRight && !topRight.isFilled) {
			next.push(topRight);
		}
		else if (topLeft && !topLeft.isFilled) {
			next.push(topLeft);
		}
		else if (bottomRight && !bottomRight.isFilled) {
			next.push(bottomRight);
		}
		else if(bottomLeft && !bottomLeft.isFilled) {
			next.push(bottomLeft);
        }
        
        // randomly select one if the next cell objects are null
	    if (next.length > 0) {
			let r = floor(random(0, next.length));
			return next[r];
        } 
        else {
			return undefined;
		}
	}; // end of checkNext

	/**
	 * 
	 * @param {Number} i 
	 * @param {Number} j 
     * @returns relative position of i, j in 1d array
	 */
	function position(i, j) {
		if (i < 0 || j < 0 || i > width - 1 || j > height - 1) {
			return -1;
		}
		return i + j * width;
	} 
}