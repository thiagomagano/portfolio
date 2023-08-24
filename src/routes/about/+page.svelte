<script lang="ts">
	import Job from '$lib/components/Job.svelte';
	import { jobs } from '$data/jobs';
</script>

<section>
	<div class="container py-24 mx-auto max-w-screen-lg">
		<div class="flex flex-wrap w-full mb-20">
			<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Quem sou eu?</h1>
				<div class="h-1 w-20 bg-surface-500 rounded" />
			</div>
			<p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
				Opa, essa nem eu sei ahahah, Mas aqui nessa página você encontra um resumo sobre minha
				carreira profissional, algumas curiosidades e os meus próximos passos.
			</p>
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="h2 text-3xl">Resumo Rápido</h2>
			<p>
				Sou Desenvolvedor Web FullStack e sou de Alvorada-RS. Estou trabalhando na área desde 2020.
				Minhas experiência até agora estão baseadas em empresas de educação. No momento estou
				procurando um novo desafio na carreira para continuar evoluindo.
			</p>
		</div>
		<div class="flex flex-col gap-4 py-8">
			<h2 class="h2 text-3xl">Carreira</h2>
			{#each jobs as job}
				<Job {job} />
			{/each}
		</div>
	</div>
</section>
