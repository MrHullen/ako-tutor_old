import tutors from './_tutors.js';

const lookup = new Map();

tutors.forEach(tutor => {
	lookup.set(tutor.slug, JSON.stringify(tutor));
});

export function get(req, response, next) {
	const { slug } = req.params;

	if (lookup.has(slug)) {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});

		response.end(lookup.get(slug));
	} else {
		response.writeHead(404, {
			'Content-Type': 'application/json'
		});

		response.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
