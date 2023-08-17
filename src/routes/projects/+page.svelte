<script>
	import Card from '$lib/components/Card.svelte';
	import { projects } from '$data/projects';
</script>

<section class="">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap w-full mb-20">
			<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Projetos</h1>
				<div class="h-1 w-20 bg-surface-500 rounded" />
			</div>
			<p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
				Aqui estão os principais projetos que desenvolvi, você pode clicar nos cards para saber mais
				informações sobre eles.
			</p>
		</div>

		<div class="flex flex-wrap -m-4">
			{#each projects as { logo, title, subtitle, description, repo, url, stack, slug }}
				<Card {logo} {title} {subtitle} {description} {repo} {url} {stack} {slug} />
			{/each}
		</div>
	</div>
</section>
