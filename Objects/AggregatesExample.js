/*
 * File: AggregatesExample.js
 * --------------------------
 * Example that shows how aggregates work.
 */

"use strict";

const EDUC128_WIDTH  = 10;
const EDUC128_HEIGHT = 10;

function AggregatesExample() {
	// You can initialize aggregates directly like this
	// Remember that aggregates aren't just limited to numbers!
	let classroom = {
		number: "EDUC 128",
		classes: ["cs106aj", "cs269si"]
	};

	// You can pass aggregates as a parameter through functions!
	determineNumberOfSeats(classroom, EDUC128_WIDTH, EDUC128_HEIGHT);

	// Afterwards, you have the information stored inside of aggregates and
	// can use them however you please.
	printClasses(classroom);
}

/* Function: determineNumberOfSeats
 * --------------------------------
 * Dummy function that shows how to assign values to aggregates whose fields
 * have not yet been created.
 */
function determineNumberOfSeats(classroom, width, height) {
	// At this point, numberOfSeats is not a field in classroom
	// To create another field inside of an aggregate, you would follow
	// this notation.
	classroom.numberOfSeats = width * height;
}

/* Function: printClasses
 * ----------------------
 * Takes in a classroom and prints all the classes that are taught in
 * that classroom.
 */
function printClasses(classroom) {
	// To access a field in an aggregate, you would follow the
	// aggregate.field_name pattern. In this case, the field we want is
	// called classes, so it would be classroom.classes. If we wanted the name,
	// it would be classroom.name.
	console.log(`Classes taught in ${classroom.number}:`);
	for (let i = 0; i < classroom.classes.length; i++) {
		console.log(" - " + classroom.classes[i]);
	}
}
