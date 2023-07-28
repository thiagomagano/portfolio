<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-8 flex items-center justify-center flex-col">
	<Avatar src="/images/avatar.jpg" width="w-64" rounded="rounded-full" />

	<h1 class="h1 text-center">
		Hello, I'm <span
			class="bg-gradient-to-br from-surface-400 to-surface-500 bg-clip-text text-transparent box-decoration-clone"
			>Thiago Magano
		</span>
		👋
	</h1>
	<p>
		I am a software engineer dedicated to problem-solving. While currently freelancing, I am
		constantly seeking personal growth and eagerly embracing new challenges. Let's connect and have
		a discussion about how I can best assist you! 😊
	</p>
	<div class="group flex gap-4 flex-wrap">
		<a href="https://linkedin.com/in/thiagomagano" target="_blank" rel="noreferrer">
			<iconify-icon icon="mdi:linkedin" width="36" />
		</a>
		<a href="https://github.com/thiagomagano" target="_blank" rel="noreferrer">
			<iconify-icon icon="mdi:github" width="36" />
		</a>
		<a href="https://twitter.com/thimagano" target="_blank" rel="noreferrer">
			<iconify-icon icon="mdi:twitter" width="36" />
		</a>
		<a href="mail:thiagomagano1993@outlok.com" target="_blank" rel="noreferrer">
			<iconify-icon icon="mdi:email" width="36" />
		</a>
	</div>
</div>
