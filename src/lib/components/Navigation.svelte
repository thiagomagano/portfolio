<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}

	interface NavData {
		slug: string;
		icon: string;
		label: string;
	}

	const navData: NavData[] = [
		{
			slug: '/',
			icon: 'mdi:home-outline',
			label: 'Home'
		},
		{
			slug: '/projects',
			icon: 'mdi:code-tags',
			label: 'Meus Projetos'
		},
		{
			slug: '/about',
			icon: 'mdi:about-outline',
			label: 'Quem eu sou?'
		},
		{
			slug: '/contact',
			icon: 'mdi:message-outline',
			label: 'Fale Comigo'
		}
	];
</script>

<nav class="list-nav p-4 py-8">
	<ul>
		{#each navData as { slug, icon, label }}
			<li>
				<a
					href={slug}
					class="btn btn-sm border-b-4 border-transparent hover:border-b-tertiary-500"
					on:click={drawerClose}
				>
					<iconify-icon {icon} width="24" />
					<span>{label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
