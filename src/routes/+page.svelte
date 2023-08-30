<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-8 flex items-center justify-center flex-col text-center">
	<Avatar src="/images/avatar.jpg" width="w-64" rounded="rounded-full" initials="TM" />

	<h1 class="h1 text-center">
		Prazer, eu sou <span class="text-primary-400-500-token">Thiago Magano </span>
	</h1>

	<p>Eu desenvolvo coisas pra web e resolvo problemas pesquisando no Google!</p>

	<div class="group flex gap-4 flex-wrap text-center justify-center">
		<a href="/projects" class="btn variant-filled-primary"> Conheça meu trampo!</a>
		<a href="/about" class="btn variant-outline-primary"> Mais sobre mim</a>
	</div>
</div>
