import tutors from '../tutor/_tutors.js';

const contents = JSON.stringify(tutors.map(tutor => {
	return {
		name: tutor.firstName + ' ' + tutor.lastName,
		slug: tutor.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}