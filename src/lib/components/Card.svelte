<script lang="ts">
	export let logo: string = 'dummy.png';
	export let title: string = 'Title';
	export let subtitle: string = 'Subtitle';
	export let description: string = 'A  DESCRIPTION HERE';
	export let repo: string = '';
	export let url: string = '';
	export let stack: string[] = ['javascript, css, html'];
	export let slug: string = '404';

	const ICON_SIZE = '36px';
</script>

<div class="p-4 w-full">
	<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg flex flex-col gap-4">
		<div class="flex items-center justify-center">
			<img
				class="rounded w-80 align-middle object-cover object-center"
				src="/images/logos/{logo}"
				alt="content"
			/>
		</div>

		<div>
			<h3 class="tracking-widest text-surface-400 text-xs font-medium title-font mb-1">
				{subtitle}
			</h3>
			<h2 class="text-lg text-white font-medium title-font">{title}</h2>
		</div>

		<p class="leading-relaxed text-base flex-grow">
			{description}
		</p>

		<ul class="flex gap-4 items-center p-2 justify-center">
			{#each stack as tech}
				<li class="text-gray-300">
					<iconify-icon icon="simple-icons:{tech}" width={ICON_SIZE} />
				</li>
			{/each}
		</ul>
		<hr class="bg-surface-500 -m-1 mb-2" />
		<div class="flex gap-4 items-center justify-between">
			<p>
				<a href={url} target="_blank"><iconify-icon icon="mdi:open-in-new" width={ICON_SIZE} /></a>
				<a href={repo} target="_blank"><iconify-icon icon="mdi:github" width={ICON_SIZE} /></a>
			</p>
			<p><a href="/projects/{slug}" class="btn variant-filled-primary uppercase">Saiba mais</a></p>
		</div>
	</div>
</div>
