<script>
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="flex items-center gap-4">
					<Avatar src="/images/avatar.jpg" width="w-12" rounded="rounded-full" />
					<strong class="text-lg uppercase"> Thiago Magano </strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/projects" class="btn btn-sm variant-ghost-surface"
					><iconify-icon icon="mdi:code-tags" width="24" /> <span>Trampos</span></a
				>
				<a href="/contact" class="btn btn-sm variant-ghost-surface"
					><iconify-icon icon="mdi:message" width="24" /> <span>Fale Comigo</span></a
				>

				<a
					href="/documents/CV-Thiago_Magano_Vargas-2023.pdf"
					class="btn btn-sm variant-ghost-tertiary"
				>
					<iconify-icon icon="mdi:resume" width="24" />
					<span>Currículo?</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
