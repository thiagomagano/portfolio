<script lang="ts">
	import Job from '$lib/components/Job.svelte';
	import { jobs } from '$data/jobs';
	import Headline from '$lib/components/Headline.svelte';
</script>

<section>
	<div class="container py-24 mx-auto max-w-screen-lg">
		<Headline
			headline="Quem sou eu?"
			description="Opa, essa nem eu sei ahahah, Mas aqui nessa página você encontra um resumo sobre minha
				carreira profissional e os meus próximos passos."
		/>

		<div class="flex flex-col gap-4">
			<h2 class="h2">Resumo Rápido</h2>
			<p>
				Sou um Desenvolvedor Web Full-stack, sou de Alvorada-RS e trabalho nessa área desde 2020. A
				linguagem que domino melhor é o JavaScript e minhas principais experiências foram na área de
				educação. No momento, estou procurando por um novo desafio para continuar evoluindo na minha
				carreira.
			</p>
		</div>

		<div class="flex flex-col gap-4 py-8">
			<h2 class="h2">Carreira</h2>
			{#each jobs as job}
				<Job {job} />
			{/each}
		</div>

		<div class="flex flex-col gap-4 py-8">
			<h2 class="h2">Próximos Passos</h2>
			<p>
				Estou focado em evoluir como desenvolvedor, primeiramente resolvendo problemas reais quando
				possível e dedicando um tempo para me aprofundar em conhecimentos que me tornem mais
				eficiente, tais como algoritmo, código limpo, padrões de projeto e arquitetura de software.
			</p>
			<p>
				Estou a procura de um novo desafio onde possa integrar uma equipe e vivenciar a experiência
				de desenvolver projetos de larga escala. Além disso, desejo contribuir para tornar a vida
				das pessoas melhor, caso seja possível.
			</p>
		</div>
		<div class="flex flex-col gap-4 py-4">
			<h2 class="h2">Eai, curtiu?</h2>
			<p>
				Caso tu tenha se interessado, você pode entrar em contato comigo clicando
				<a href="/contact" class="font-bold text-tertiary-400">aqui</a>.<br />Vai ser um prazer
				conversar contigo e ver como nós podemos nos ajudar!
			</p>
			<div class="py-4 flex gap-4 flex-wrap md:flex-1">
				<a class="btn variant-filled-primary flex-grow" href="/contact">Fale comigo</a>
				<a class="btn variant-filled-primary flex-grow" href="/projects">Conheça meus projetos</a>
				<a
					class="btn variant-outline-primary flex-grow"
					href="/documents/CV-Thiago_Magano_Vargas-2023.pdf"
					download="/documents/CV-Thiago_Magano_Vargas-2023.pdf">Baixe meu currículo em PDF</a
				>
			</div>
		</div>
	</div>
</section>
