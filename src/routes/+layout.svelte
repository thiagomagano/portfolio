<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import type { ToastSettings } from '@skeletonlabs/skeleton';

	import '../app.postcss';

	import { AppShell, AppBar, Avatar, Toast, toastStore } from '@skeletonlabs/skeleton';

	import { fly } from 'svelte/transition';

	import NavLink from '$lib/components/NavLink.svelte';

	export let data;

	const SOCIAL_ICON_SIZE = '24';
	$: console.log(data.url);
</script>

<Toast position="t" />
<AppShell slotSidebarLeft="w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="transparent">
			<svelte:fragment slot="lead">
				<a
					href="/"
					class="btn btn-sm border-b-4 hover:border-b-primary-500 hover:text-opacity-75 {data.url ===
					'/'
						? 'border-b-surface-500'
						: 'border-b-transparent'}"
				>
					<span>Thiago Magano</span>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<NavLink
					href="/projects"
					icon="mdi:code-tags"
					label="Meus Projetos"
					active={data.url === '/projects'}
				/>
				<NavLink
					href="/about"
					icon="mdi:about-outline"
					label="Quem eu sou?"
					active={data.url === '/about'}
				/>
				<NavLink
					href="/contact"
					icon="mdi:message-outline"
					label="Fale Comigo"
					active={data.url === '/contact'}
				/>
				<NavLink
					href="/documents/CV-Thiago_Magano_Vargas-2023.pdf"
					icon="mdi:resume"
					label="Currículo.pdf"
				/>
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
