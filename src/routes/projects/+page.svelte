<script lang="ts">
	import Wip from '$lib/components/Wip.svelte';
	import { projects } from '$data/projects.js';
</script>
<Wip />
<div class="container mx-auto text-center p-8  space-y-8">


<h2 class="h2">Projects</h2>

<div class="flex items-center justify-center gap-4 flex-col">
	
	{#each projects as project}
		
			<div class="card">
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
				<p><a href={project.url}>Demo:{project.url}</a></p>
				<p>Repo:<a href={project.repo}>{project.repo}</a></p>
			</div>

			<hr class="opacity-50" />
			<footer>
				<ul class="flex gap-4 items-center justify-center p-2">
					{#each project.stack as tech}
						<li><img src="/images/logos/{tech}.svg" alt="{tech} logo" class="w-12 bg-surface-700 p-2"></li>
					
					{/each}
				</ul>
			</footer>
      </div>
		
	{/each}
</div>
</div>
