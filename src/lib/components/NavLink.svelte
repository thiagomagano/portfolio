<script>
	export let href = '/';
	export let icon = 'mdi:not';
	export let label = 'Link';
	export let active = false;
	export let target = '';
</script>

<a
	{href}
	class="btn btn-sm border-b-4 hover:border-b-tertiary-500 {active
		? 'border-b-primary-500'
		: 'border-b-transparent'}"
	{target}
>
	<iconify-icon {icon} width="24" />
	<span>{label}</span>
</a>
