<script lang="ts">
	import type { Job } from '$data/jobs';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let job: Job;
</script>

<div class="flex flex-col gap-4 pt-4">
	<h3 class="h3 text-xl">
		{job.title}
	</h3>
	<h4 class="text-sm flex justify-between text-primary-500">
		<span>{job.func} </span> <span> {job.year} </span>
	</h4>
	<Accordion regionControl="variant-glass" regionCaret="variant-glass" regionPanel="variant-glass">
		<AccordionItem>
			<svelte:fragment slot="lead"
				><span class="mt-1 block"
					><iconify-icon icon="mdi:domain" width="24" />
				</span></svelte:fragment
			>
			<svelte:fragment slot="summary">Qual é a dessa empresa?</svelte:fragment>
			<svelte:fragment slot="content">{job.descEmployee}</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><span class="mt-1 block"
					><iconify-icon icon="mdi:check-all" width="24" />
				</span></svelte:fragment
			>
			<svelte:fragment slot="summary">O que eu fiz lá?</svelte:fragment>
			<svelte:fragment slot="content"
				><ul class="list-disc list-inside">
					{#each job.descResults as results}
						<li class="list-item py-2">{@html results}</li>
					{/each}
				</ul></svelte:fragment
			>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><span class="mt-1 block"
					><iconify-icon icon="mdi:school-outline" width="24" />
				</span></svelte:fragment
			>
			<svelte:fragment slot="summary">O que eu aprendi?</svelte:fragment>
			<svelte:fragment slot="content">{job.descLearns}</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
