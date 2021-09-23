const courses = require('./courses');
const { days, startTimes, finishTimes } = require('./values');

//returns an array of numbers between start and finish
const getRange = (day, start, finish) => { return Array.from({ length: (finish + 1 - start)}, (_, i) => i + day + start ); }

// aggregate different sections in one place
let addedCourses = {};
let processedCourses = [];

for (let course of courses) {
	if (course.code in addedCourses) { //https://jsben.ch/7EFWK
		processedCourses[addedCourses[course.code]].time.push(course.time);
	} else {
		course.time = [course.time];
		processedCourses.push(course);
		addedCourses[course.code] = processedCourses.length - 1; //save index for later use
	}
}

// turn text format times into arrays of numbers
for (let processedCourse of processedCourses) {
	// remove duplicates in times
	processedCourse.time = Array.from(new Set(processedCourse.time));

	for (let [i, time] of processedCourse.time.entries()) {

		const [day1, start1, , finish1, separator, day2, start2, , finish2] = time.split(' ');

		processedCourse.time[i] = [...getRange(days[day1], startTimes[start1], finishTimes[finish1])];
		
		if (separator === "|") {
			processedCourse.time[i] = [...processedCourse.time[i], ...getRange(days[day2], startTimes[start2], finishTimes[finish2])];
		}
	}
}

//console.log(JSON.stringify(processedCourses, null, 2));