<script lang="ts">
	import { enhance } from '$app/forms';
	import { ConicGradient } from '@skeletonlabs/skeleton';

	const SOCIAL_ICON_SIZE = '34';

	let creating = false;
	const conicStops = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-surface-500))', start: 75, end: 100 }
	];

	export let form;

	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toastSucess: ToastSettings = {
		message: 'Mensagem enviada com sucesso! ✅',
		autohide: false,
		background: 'variant-filled-success'
	};
	const toastWaiting: ToastSettings = {
		message: 'Tentando enviar.. ↪️',
		background: 'variant-filled-tertiary'
	};
</script>

<section class=" body-font relative">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap w-full mb-20">
			<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Contato</h1>
				<div class="h-1 w-20 bg-surface-500 rounded" />
			</div>
			<p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
				Opa, que bom que tu quer falar comigo. Tu podes fazer isso utilizando o formulário ou pelas
				redes sociais abaixo.
			</p>
		</div>
		<div class="grid md:grid-cols-2 grid-cols-1">
			{#if creating}
				<div class="flex flex-col gap-4">
					<ConicGradient stops={conicStops} spin />
				</div>
			{:else}
				<form
					class="mr-16 -ml-2"
					method="POST"
					use:enhance={() => {
						creating = true;
						if (creating) {
							toastStore.trigger(toastWaiting);
						}

						return async ({ update, result }) => {
							await update();
							creating = false;
							if ((result.type = 'success')) {
								toastStore.clear();
								toastStore.trigger(toastSucess);
							}
						};
					}}
				>
					<div class="flex flex-wrap">
						<div class="p-2 w-1/2">
							<div class="relative">
								<label for="name" class="leading-7 text-sm">Seu lindo nome</label>
								<input
									type="text"
									id="name"
									required
									name="name"
									class="w-full input variant-ghost-surface bg-opacity-50 rounded border focus:border-surface-300 focus:bg-white focus:text-surface-600 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							{#if form?.missingName}
								<p class="text-red-500">{form?.msg}</p>
							{/if}
						</div>
						<div class="p-2 w-1/2">
							<div class="relative">
								<label for="email" class="leading-7 text-sm">Seu melhor email</label>
								<input
									type="email"
									required
									id="email"
									name="email"
									class="w-full input variant-ghost-surface bg-opacity-50 rounded border focus:border-surface-300 focus:bg-white focus:text-surface-600 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							{#if form?.missingEmail}
								<p class="text-red-500">{form?.msg}</p>
							{/if}
						</div>
						<div class="p-2 w-full">
							<div class="relative">
								<label for="message" class="leading-7 text-sm">De que forma posso te ajudar?</label>
								<textarea
									id="message"
									required
									name="message"
									class="w-full textarea variant-ghost-surface bg-opacity-50 rounded border focus:border-surface-300 focus:bg-white focus:text-surface-600 focus:ring-2 focus:ring-indigo-200 h-32 outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								/>
							</div>
							{#if form?.missingMessage}
								<p class="text-red-500">{form?.msg}</p>
							{/if}
						</div>
						<div class="p-2 w-full">
							<button class="btn variant-filled-primary flex mx-auto uppercase" type="submit"
								>Enviar</button
							>
						</div>
					</div>
				</form>
			{/if}
			<ul class="grid gap-4 w-full grid-cols-1">
				<li class="flex gap-4 items-center">
					<iconify-icon icon="mdi:linkedin" width={SOCIAL_ICON_SIZE} />
					<a class="hover:underline" href="http://linkedin.com/in/thiagomagano"> Linkedin </a>
				</li>
				<li class="flex gap-4 items-center">
					<iconify-icon icon="mdi:github" width={SOCIAL_ICON_SIZE} />
					<a class="hover:underline" href="http://github.com/thiagomagano"> Github </a>
				</li>
				<li class="flex gap-4 items-center">
					<iconify-icon icon="mdi:twitter" width={SOCIAL_ICON_SIZE} />
					<a class="hover:underline" href="http://twitter.com/thimagano"> Twitter</a>
				</li>
				<li class="flex gap-4 items-center">
					<iconify-icon icon="mdi:instagram" width={SOCIAL_ICON_SIZE} />
					<a class="hover:underline" href="http://instagram.com/thimagano"> Instagram</a>
				</li>
			</ul>
		</div>
	</div>
</section>
