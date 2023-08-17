<script lang="ts">
	export let logo: string = 'dummy.png';
	export let title: string = 'Title';
	export let subtitle: string = 'Subtitle';
	export let description: string = 'A  DESCRIPTION HERE';
	export let repo: string = '';
	export let url: string = '';
</script>

<div class="xl:w-1/4 md:w-1/2 p-4 flex-shrink">
	<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg flex flex-col gap-4">
		<img
			class=" rounded w-full object-cover object-center"
			src="/images/logos/{logo}"
			alt="content"
		/>
		<div>
			<h3 class="tracking-widest text-surface-400 text-xs font-medium title-font mb-1">
				{subtitle}
			</h3>
			<h2 class="text-lg text-white font-medium title-font">{title}</h2>
		</div>

		<p class="leading-relaxed text-base flex-grow">
			{description}
		</p>
		<div class="flex gap-4 items-center justify-between">
			<p>
				<a href={repo}><iconify-icon icon="mdi:github" width="36px" /></a>
				<a href={url}><iconify-icon icon="mdi:open-in-new" width="36px" /></a>
			</p>
			<p><a href={repo} class="btn variant-filled-primary uppercase">Saiba mais</a></p>
		</div>
	</div>
</div>
