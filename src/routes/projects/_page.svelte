<script lang="ts">
	import Wip from '$lib/components/Wip.svelte';
	import { projects } from '$data/projects.js';
</script>

<Wip />
<div class="container mx-auto text-center p-8 space-y-8">
	<h2 class="h2">Trampos</h2>

	<div class="flex items-center justify-center gap-4">
		{#each projects as project}
			<div class="card max-w-md h-full min-h-[450px]">
				<header>
					<!-- <img src="images/{project.url[0]}" alt="Capa do projeto {project.title}" /> -->
				</header>

				<div class="p-4 space-y-4">
					<h4 class="h4">{project.title}</h4>
					<p class="h6">{project.subtitle}</p>

					<article>
						<p>
							{project.description}
						</p>
					</article>
					<div class="flex gap-4 items-center justify-center">
						<p><a href={project.repo} class="btn variant-filled-primary">Saiba mais</a></p>
						<p><a href={project.repo}><iconify-icon icon="mdi:github" width="36px" /></a></p>
						<p><a href={project.url}><iconify-icon icon="mdi:open-in-new" width="36px" /></a></p>
					</div>
				</div>

				<hr class="opacity-50" />
				<footer>
					<ul class="flex gap-4 items-center justify-center p-2">
						{#each project.stack as tech}
							<li>
								<img
									src="/images/logos/{tech}.svg"
									alt="{tech} logo"
									class="w-12 bg-surface-700 p-2"
								/>
							</li>
						{/each}
					</ul>
				</footer>
			</div>
		{/each}
	</div>
</div>
