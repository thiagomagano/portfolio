<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-16 space-y-8 flex items-center justify-center flex-col text-center">
	<Avatar
		src="/images/avatr.webp"
		width="w-64"
		rounded="rounded-full"
		initials="TM"
		alt="Criado por IA"
	/>

	<div class="flex flex-col gap-2">
		<h1 class="h1 text-4xl font-heading-token">Thiago Magano</h1>
		<h2 class="h5 text-secondary-5 00">Webmaster</h2>
	</div>

	<p>Solucionando problemas na rede mundial de computadores.</p>

	<div class="flex gap-4">
		<a href="/about" class="btn variant-filled-primary w-full uppercase font-semibold">
			Conheça meu trampo</a
		>
	</div>
</div>
