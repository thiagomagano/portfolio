<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-8 flex items-center justify-center flex-col text-center">
	<Avatar src="/images/avatar.jpg" width="w-64" rounded="rounded-full" initials="TM" />

	<h1 class="h1 text-center">
		Prazer, eu sou <span
			class="bg-gradient-to-br from-surface-400 to-surface-500 bg-clip-text text-transparent box-decoration-clone"
			>Thiago Magano
		</span>
	</h1>

	<p>
		Eu desenvolvo coisas pra web e resolvo problemas perguntando pro Google! Como posso te ajudar?
	</p>

	<div class="group flex gap-4 flex-wrap text-center justify-center">
		<a href="/about" class="btn variant-filled-primary min-w-[240px]"> FALE COMIGO</a>
		<a href="/projects" class="btn variant-ghost-primary"> CONHEÇA MEU TRAMPO</a>
	</div>
</div>
