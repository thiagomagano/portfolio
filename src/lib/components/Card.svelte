<script lang="ts">
	export let logo = 'dummy.png';
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let description = 'A  DESCRIPTION HERE';
	export let repo = '';
	export let url = '';
	export let stack = ['javascript, css, html'];

	const ICON_SIZE = '36px';
</script>

<div class="card flex flex-col gap-4 p-4 shadow-lg variant-glass text-center">
	<div
		class="flex items-center justify-center h-44 dark:bg-transparent dark:mx-0 bg-primary-500 -mx-4"
	>
		<img
			class="rounded w-80 align-middle object-cover object-center"
			src="/images/logos/{logo}"
			alt="content"
		/>
	</div>

	<div class="text-center">
		<h2 class="text-lg font-medium title-font">{title}</h2>
		<h3 class="tracking-widest text-primary-500 text-xs font-medium title-font mb-1">
			{subtitle}
		</h3>
	</div>

	<p class="leading-relaxed text-base flex-grow">
		{description}
	</p>

	<ul class="flex gap-4 items-center justify-center">
		{#each stack as tech}
			<li class="">
				<iconify-icon icon="simple-icons:{tech}" width={ICON_SIZE} />
			</li>
		{/each}
	</ul>
	<hr class="opacity-50 -mx-4" />
	<div class="flex gap-4 items-center justify-between">
	
			<a href={url} target="_blank" class="flex items-center gap-2"><iconify-icon icon="mdi:open-in-new" width={ICON_SIZE} />  <span>Visite</span></a>
			<a href={repo} target="_blank"><iconify-icon icon="mdi:github" width={ICON_SIZE} /></a>
		
	</div>
</div>
