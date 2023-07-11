<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">THI</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://linkedin.com/in/thiagomagano"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/thiagomagano"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/thimagano"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
