/// <reference path="play.board.ts" />

module trains.play.TrainRenderer {

	var halfGridSize = trains.play.gridSize / 2;

	var trainWidth = secondTrackPosY - firstTrackPosY;
	var trainLength = trains.play.gridSize;

	var leftX = firstTrackPosY * -1;
	var rightX = secondTrackPosY * -1;

	var frontY = halfGridSize * -1;
	var backY = halfGridSize;

	// DRAW ASSUMING TRAIN FACING UP
	var baseColour = "#111111";

	var roofPoke = 2;
	var roofWidth = trainWidth + roofPoke * 2;
	var roofLength = 12;
	var roofX = leftX - roofPoke;
	var roofY = backY - roofLength;

	var shaftPadding = 4;
	var shaftWidth = trainWidth - shaftPadding * 2;
	var shaftLength = trainLength - shaftPadding;
	var shaftX = leftX + shaftPadding;
	var shaftY = frontY + shaftPadding;

	export function DrawChoochoo(context: CanvasRenderingContext2D): void {


		context.fillStyle = baseColour;
		context.fillRect(leftX, frontY, trainWidth, trainLength);

		context.fillStyle = GetShaftFillStyle(context, "#7A040B", "#DD2C3E");
		context.fillRect(shaftX, shaftY, shaftWidth, shaftLength);

		context.fillStyle = GetRoofFillStyle(context, baseColour, "#5d5d5d");
		context.fillRect(roofX, roofY, roofWidth, roofLength);
		context.strokeRect(roofX, roofY, roofWidth, roofLength);

		context.fillStyle = baseColour;
		context.beginPath();
		context.arc(shaftX + (shaftWidth / 2), shaftY + 6, 2, 0, 2 * Math.PI);
		context.stroke();
		context.closePath;
		context.fill();
	}

	function GetRoofFillStyle(context: CanvasRenderingContext2D, firstColour: string, secondColour: string): CanvasGradient {
		var x2 = roofX + roofWidth;

		var grd = context.createLinearGradient(roofX, roofY, x2, roofY);
		grd.addColorStop(0, firstColour);
		grd.addColorStop(0.5, secondColour);
		grd.addColorStop(1, firstColour);
		return grd;
	}

	function GetShaftFillStyle(context: CanvasRenderingContext2D, firstColour: string, secondColour: string): CanvasGradient {
		var x2 = shaftX + shaftWidth;

		var grd = context.createLinearGradient(shaftX, shaftY, x2, shaftY);
		grd.addColorStop(0, firstColour);
		grd.addColorStop(0.5, secondColour)
		grd.addColorStop(1, firstColour);
		return grd;
	}
}