<script lang="ts">
	import Wip from '$lib/components/Wip.svelte';
	import { projects } from '$data/projects.js';
</script>

<div class="container mx-auto p-8 space-y-8 flex items-center justify-center flex-col">
	<h2 class="h2">Projects</h2>
	{#each projects as project}
		<a href="/projects/{project.id}" class="card">
			<header>
				<!-- <img src="images/{project.url[0]}" alt="Capa do projeto {project.title}" /> -->
			</header>

			<div class="p-4 space-y-4">
				<h4 class="h4">{project.title}</h4>
				<article>
					<p>
						{project.description}
					</p>
				</article>
				<p>Demo:{project.url}</p>
				<p>Repo:{project.repo}</p>
			</div>

			<hr class="opacity-50" />
			<footer>
				<ul class="flex gap-4">
					{#each project.stack as tech}
						<li>{tech}</li>
					{/each}
				</ul>
			</footer>
		</a>
	{/each}
</div>

<Wip />
