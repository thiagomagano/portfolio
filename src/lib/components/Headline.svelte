<script>
	export let headline = 'TITLE';
	export let description = 'LOREM IPSUM';
</script>

<div class="flex flex-wrap w-full mb-20">
	<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
		<h1 class="h1 inline-block">
			{headline}
			<div class="h-1 w-[70%] mt-2 bg-primary-500 rounded" />
		</h1>
	</div>
	<p class="lg:w-1/2 w-full leading-relaxed text-opacity-80">
		{description}
	</p>
</div>
