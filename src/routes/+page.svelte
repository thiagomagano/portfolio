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
			class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
			>Thiago Magano
		</span> 👋
	</h1>

	<p>
		I am a passionate full-stack software engineer dedicated to problem-solving and improving the
		lives of others. With my background as a frontend at SENAI-RS and my experience as an educator
		in a web development bootcamps, I have honed my skills in delivering impactful solutions. While
		currently freelancing, I am constantly seeking personal growth and eagerly embracing new
		challenges. Let's connect and have a discussion about how I can best assist you! 😊
	</p>
	<div class="group flex gap-4 flex-wrap">
		<a href="#projects" class="btn variant-filled"> Projects</a>
		<a href="/resume" class="btn variant-filled"> Skills</a>
		<a href="/resume" class="btn variant-filled"> Resume</a>
		<a href="#contact" class="btn bg-gradient-to-br from-red-500 to-yellow-500"> Contact</a>
	</div>
</div>
