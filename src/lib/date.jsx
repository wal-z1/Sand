export default function formatRelative(iso) {
	const now = new Date();
	const date = new Date(iso);
	const diffSeconds = Math.round((now.getTime() - date.getTime()) / 1000);

	const MINUTE = 60;
	const HOUR = MINUTE * 60;
	const DAY = HOUR * 24;
	const MONTH = DAY * 30.44; // avg month length
	const YEAR = DAY * 365.25; // to make sure xe account  for leap years

	let relativeString;

	if (diffSeconds < MINUTE) {
		relativeString = "just now";
	} else if (diffSeconds < HOUR) {
		const count = Math.floor(diffSeconds / MINUTE);
		relativeString = `${count} minute${count > 1 ? "s" : ""} ago`;
	} else if (diffSeconds < DAY) {
		const count = Math.floor(diffSeconds / HOUR);
		relativeString = `${count} hour${count > 1 ? "s" : ""} ago`;
	} else if (diffSeconds < DAY * 2) {
		relativeString = "yesterday";
	} else if (diffSeconds < MONTH) {
		const count = Math.floor(diffSeconds / DAY);
		relativeString = `${count} days ago`;
	} else if (diffSeconds < YEAR) {
		const count = Math.floor(diffSeconds / MONTH);
		relativeString = `${count} month${count > 1 ? "s" : ""} ago`;
	} else {
		const count = Math.floor(diffSeconds / YEAR);
		relativeString = `${count} year${count > 1 ? "s" : ""} ago`;
	}

	// capitalize the first letter of the final string
	return relativeString.charAt(0).toUpperCase() + relativeString.slice(1);
}