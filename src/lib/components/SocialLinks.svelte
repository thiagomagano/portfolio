<script>
	export let iconSize = '18';
	export let classes = '';
</script>

<div class={classes}>
	<a href="https://linkedin.com/in/thiagomagano" target="_blank" rel="noreferrer">
		<iconify-icon icon="mdi:linkedin" width={iconSize} />
	</a>
	<a href="https://github.com/thiagomagano" target="_blank" rel="noreferrer">
		<iconify-icon icon="mdi:github" width={iconSize} />
	</a>

	<a href="http://instagram.com/thimagano">
		<iconify-icon icon="mdi:instagram" width={iconSize} />
	</a>
	<a
		class="hover:underline"
		href="https://api.whatsapp.com/send?phone=51993438767&text=Olá Thiago, Gostaria de falar com você"
	>
		<iconify-icon icon="mdi:whatsapp" width={iconSize} />
	</a>
	<a href="mail:thiagomagano1993@outlok.com" target="_blank" rel="noreferrer">
		<iconify-icon icon="mdi:email" width={iconSize} />
	</a>
</div>
