<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-8 flex items-center justify-center flex-col">
	<Avatar src="/images/avatar.jpg" width="w-64" rounded="rounded-full" />

	<h1 class="h1 text-center">
		Prazer, eu sou <span
			class="bg-gradient-to-br from-primary-500 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
			>Thiago Magano
		</span>
		👋
	</h1>
	<!-- <p>
		I am a software engineer dedicated to problem-solving. While currently freelancing, I am
		constantly seeking personal growth and eagerly embracing new challenges. Let's connect and have
		a discussion about how I can best assist you! 😊
	</p> -->
	<p>
		Eu desenvolvo coisas pra rede mundial de computadores e resolvo problemas perguntando pro
		Google!
	</p>
	<div class="group flex gap-16 flex-wrap justify-between">
		<a href="/projects" class="btn variant-filled-primary"> CONHEÇA MEU TRAMPO! 💼</a>
		<div class="mt-2">
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
</div>
