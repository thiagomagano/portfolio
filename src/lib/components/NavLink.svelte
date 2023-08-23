<script>
	export let href = '/';
	export let icon = 'mdi:not';
	export let label = 'Link';
</script>

<a {href} class="btn btn-sm border-b-transparent border-b-4 hover:border-b-surface-500">
	<iconify-icon {icon} width="24" />
	<span>{label}</span>
</a>
