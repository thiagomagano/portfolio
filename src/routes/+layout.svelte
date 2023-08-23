<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import type { ToastSettings } from '@skeletonlabs/skeleton';

	import '../app.postcss';

	import { AppShell, AppBar, Avatar, Toast, toastStore } from '@skeletonlabs/skeleton';

	import { fly } from 'svelte/transition';

	export let data;

	const SOCIAL_ICON_SIZE = '24';
</script>

<Toast position="t" />
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="flex items-center gap-4">
					<Avatar src="/images/avatar.jpg" width="w-12" rounded="rounded-full" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/projects" class="btn btn-sm variant-ghost-surface"
					><iconify-icon icon="mdi:code-tags" width="24" /> <span>Meus Projetos</span></a
				>
				<a href="/about" class="btn btn-sm variant-ghost-surface"
					><iconify-icon icon="mdi:about-outline" width="24" /> <span>Quem eu sou?</span></a
				>
				<a href="/contact" class="btn btn-sm variant-ghost-surface"
					><iconify-icon icon="mdi:message-outline" width="24" /> <span>Fale Comigo</span></a
				>

				<a
					href="/documents/CV-Thiago_Magano_Vargas-2023.pdf"
					class="btn btn-sm variant-ghost-tertiary"
				>
					<iconify-icon icon="mdi:resume" width="24" />
					<span>Currículo.pdf</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	{#key data.url}
		<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<div class=" bg-opacity-75 text-center">
			<div
				class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4"
			>
				<p class="text-gray-400 text-sm text-center sm:text-left">© 2023 Thiago Magano</p>

				<div class="mt-2">
					<a href="https://linkedin.com/in/thiagomagano" target="_blank" rel="noreferrer">
						<iconify-icon icon="mdi:linkedin" width={SOCIAL_ICON_SIZE} />
					</a>
					<a href="https://github.com/thiagomagano" target="_blank" rel="noreferrer">
						<iconify-icon icon="mdi:github" width={SOCIAL_ICON_SIZE} />
					</a>
					<a href="https://twitter.com/thimagano" target="_blank" rel="noreferrer">
						<iconify-icon icon="mdi:twitter" width={SOCIAL_ICON_SIZE} />
					</a>
					<a href="http://instagram.com/thimagano">
						<iconify-icon icon="mdi:instagram" width={SOCIAL_ICON_SIZE} />
					</a>
					<a href="mail:thiagomagano1993@outlok.com" target="_blank" rel="noreferrer">
						<iconify-icon icon="mdi:email" width={SOCIAL_ICON_SIZE} />
					</a>
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
