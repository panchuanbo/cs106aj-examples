/*
 * File: OOPExample.js
 * -------------------
 * Example showing how Object Orientated Programming (OOP)
 * works in JavaScript with Factory Functions.
 */

"use strict";

const SENIOR_YEAR    = 4;
const JUNIOR_YEAR    = 3;
const SOPHOMORE_YEAR = 2;
const FRESHMAN_YEAR  = 1

/** Main Function **/
function OOPExample() {
	let student = Student("Chuanbo Pan", SENIOR_YEAR, ["cs238", "cs154", "cs251"])
	student.updateNickname("cbo");

	console.log("Name: " + student.getName());
	console.log("Nickname: " + student.getNickname());
	console.log("Classes: " + student.getClasses());

	console.log("Adding cs106aj to course list...");
	student.addClass("cs106aj");
	console.log("Classes: " + student.getClasses());

	console.log("Attempting to re-add cs251...");
	student.addClass("cs251");

	console.log("Attempting to update invalid name...");
	student.updateName("");
}

/* Factory Fuction: Student
 * ------------------------
 * Creates a Student object that contains their name (String),
 * year (Number), and classes taken (Array of Strings).
 */
function Student(name, year, classes) {
	// Creates the `Student` object that we will populate
	let student = {};

	// We create a nickname variable here that stores information
	// about a student's nickname/preferred name. A student might
	// not have one, so it can be null. This variable exists only
	// here, and cannot be accessed directly. In OOP literature,
	// this is known as a `private instance` variable.
	let nickname = null;

	/* Method: getName()
	 * -----------------
	 * Returns the student's name. Note that once the object is returned,
	 * we cannot access the `name` variable anymore. This is because the
	 * `name` parameter exists only in the scope of this method. We need
	 * to create a helper function to get the name.
	 */
	student.getName = function() {
		return name;
	}

	/* Method: getYear()
	 * -----------------
	 * Returns the student's current year.
	 */
	student.getClasses = function() {
		return classes;
	}

	/* Method: getClasses()
	 * --------------------
	 * Returns the list of classes as an array of strings.
	 */
	 student.getClasses = function() {
		 return classes;
	 }

	 /* Method: getName()
 	  * -----------------
 	  * Returns the student's nickname. Similar to getName(), the variable
	  * `nickname` exists only in the scope of this function. Therefore,
	  * it cannot be seen elsewhere. In order for others to access this data,
	  * we need this `getter` function to get the name.
 	  */
	 student.getNickname = function() {
		 return nickname;
	 }

	 /* Method: updateName()
	  * --------------------
		* Here we see the power of not allowing users to have direct access
		* to variables. If we had `name` as a field that is publically
		* accessible (e.g., student.name), then people could assign anything
		* they want to that name (including the empty string)! Since these variables
		* are private, they can no longer do that and instead have to go through our
		* functions to set values. In these functions, we can actually do checks
		* to ensure that the values being assigned are valid.
		*/
	 student.updateName = function(newName) {
		 let nameToAssign = newName.trim()
		 if (nameToAssign.length === 0) {
			 console.log("Cannot assign empty name!");
		 } else {
		 	 name = nameToAssign;
		 }
	 }

	 /* Method: addClass()
 	  * ------------------
 	  * Adds a new class to the array, if it does not exist already.
 	  */
	 student.addClass = function(newClass) {
		 if (classes.indexOf(newClass) === -1) {
			 classes.push(newClass);
		 } else {
		 	 console.log("This class already exists!");
		 }
	 }

	 /* Method: updateNickname()
 	  * ------------------------
 	  * Updates the student's nickname. If they enter the empty string,
		* then set it to null.
 	  */
	 student.updateNickname = function(newNickname) {
		 let nicknameToAssign = newNickname.trim();
		 if (nicknameToAssign.length === 0) {
			 nickname = null;
		 } else {
			 nickname = nicknameToAssign;
		 }
	 }

	return student;
}
