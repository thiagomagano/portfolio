<script>
	import Card from '$lib/components/Card.svelte';
	import { projects, dummyProjects } from '$data/projects';
	import Headline from '$lib/components/Headline.svelte';
</script>

<section class="">
	<div class="container py-24 mx-auto max-w-screen-lg">
		<Headline
			headline="Projetos"
			description="Aqui estão os principais projetos que desenvolvi, você pode clicar nos cards para saber mais
				informações sobre eles."
		/>

		<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
			{#each projects as { logo, title, subtitle, description, repo, url, stack, slug }}
				<Card {logo} {title} {subtitle} {description} {repo} {url} {stack} {slug} />
			{/each}
		</div>
	</div>
</section>
