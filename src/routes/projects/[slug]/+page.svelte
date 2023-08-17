<script lang="ts">
	import Wip from '$lib/components/Wip.svelte';
	import type { PageData } from './$types';
	import type { Project } from '$data/projects';

	export let data: PageData;
	let project: Project = data.projectData;
</script>

<div class="container px-5 py-24 mx-auto">
	<div>
		<h1 class="text-center h1">{project.title}</h1>
		<div class="h-1 w-20 bg-surface-500 rounded" />
	</div>

	<Wip />
</div>
