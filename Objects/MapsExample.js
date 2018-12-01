/*
 * File: Hailstone.js
 * ------------------
 * This program shows how maps work in JavaScript.
 */

"use strict";

function MapsExample() {
	let studentToId = createStudentToIdMap();

	let lookupCallback = function(phrase) {
		let name = phrase.trim().toLowerCase();
		let id = studentToId[name];

		if (id !== undefined) {
			console.log("ID: " + id);
		} else {
			console.log("That name doesn't exist! Do you wish to add it?");
		}

		console.requestInput("Student Name: ", lookupCallback);
	}

	console.requestInput("Student Name: ", lookupCallback);
}

/* Function: createStudentToIdMap
 * ------------------------------
 * Creates a mapping from students to their ID.
 * https://en.wikipedia.org/wiki/Alice_and_Bob
 */
function createStudentToIdMap() {
	return {
		"alice": 0,
		"bob": 1,
		"carol": 2,
		"chuck": 3,
		"dan": 4,
		"eve": 5,
		"frank": 6,
		"grace": 7,
		"judy": 8
	}
}
