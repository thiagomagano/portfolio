import type { PageLoad } from './$types';
import { projects } from '$data/projects';
import type { Project } from '$data/projects';

export const load = (async ({ params }) => {
	const projectData: Project = projects.filter((project) => project.slug === params.slug)[0];

	console.log(projectData);

	return {
		projectData
	};
}) satisfies PageLoad;
