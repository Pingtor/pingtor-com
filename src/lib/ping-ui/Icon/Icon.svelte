<script lang="ts">
	import BaseIcon from 'svelte-icons-pack/Icon.svelte';

	export let as: SVGElement;
	//export let color: string = undefined;
	export let size: string = undefined;
	export let title: string = undefined;
</script>

{#if as}
	<BaseIcon src={as} {size} {title} className="stroke-current fill-current stroke-3 styles" />
{/if}

<style lang="postcss">
	:global(svg) {
		stroke-linecap: square;
	}
</style>
