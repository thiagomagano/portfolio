<script lang="ts">
	import '../app.postcss';

	import {
		AppShell,
		AppBar,
		Toast,
		LightSwitch,
		initializeStores,
		Drawer,
		getDrawerStore
	} from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();

	import { fly } from 'svelte/transition';

	import NavLink from '$lib/components/NavLink.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	export let data;

	const SOCIAL_ICON_SIZE = '24';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Toast position="t" />
<Drawer bgDrawer="variant-glass">
	<h2 class="h2 p-4">Navegação</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-56 p-4" slotPageContent="px-4 md:px-0">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			background="transparent"
			gridColumns="grid-cols-3"
			slotLead="lg:place-self-start place-self-center lg:order-1 order-2"
			slotDefault="lg:place-self-center place-self-start order-1 lg:order-2"
			slotTrail="place-content-end order-3"
		>
			<svelte:fragment slot="lead">
				<a
					href="/"
					class="btn btn-sm border-b-4 hover:border-b-surface-500 hover:text-opacity-75 {data.url ===
					'/'
						? 'border-b-primary-500'
						: 'border-b-transparent'}"
				>
					<span class="font-bold tracking-wide">Thiago Magano</span>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<nav class="lg:flex hidden flex-nowrap gap-2">
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
					<!-- <NavLink
					href="/documents/CV-Thiago_Magano_Vargas-2023.pdf"
					icon="mdi:resume"
					label="Currículo.pdf"
				/> -->
				</nav>

				<button class="lg:hidden btn btn-sm" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</svelte:fragment>

			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
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

					<a href="http://instagram.com/thimagano">
						<iconify-icon icon="mdi:instagram" width={SOCIAL_ICON_SIZE} />
					</a>
					<a
						class="hover:underline"
						href="https://api.whatsapp.com/send?phone=51993438767&text=Olá Thiago, Gostaria de falar com você"
					>
						<iconify-icon icon="mdi:whatsapp" width={SOCIAL_ICON_SIZE} />
					</a>
					<a href="mail:thiagomagano1993@outlok.com" target="_blank" rel="noreferrer">
						<iconify-icon icon="mdi:email" width={SOCIAL_ICON_SIZE} />
					</a>
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
