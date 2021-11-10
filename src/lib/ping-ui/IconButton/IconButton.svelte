<script lang="ts">
	import Icon from '../Icon/Icon.svelte';
	import Button from '../Button/Button.svelte';
	import sizes from './sizes';

	import { createEventDispatcher } from 'svelte';
	import { getSize } from '../utils/system';

	/** Component specific attributes */

	export let as: SVGElement;
	export let loading: boolean = false;

	/** Icon sizes */

	export let size: string = '0em';
	/* Button sizes */

	export let sm = undefined;
	export let md = undefined;
	export let lg = undefined;
	export let xl = undefined;

	/** Variants */
	export let ghost = undefined;
	export let solid = undefined;

	let variants = { ghost, solid };

	/** Shapes */
	export let circle = undefined;
	export let square = undefined;
	let shapes = {
		circle,
		square
	};

	const dispatch = createEventDispatcher();

	const buttonSize = getSize({
		fromProps: { sm, md, lg, xl },
		as: sizes,
		fallback: 'sm'
	});

	function handleClick(e) {
		dispatch('click', e);
	}
</script>

<Button
	class={`${$$props.class} ${buttonSize} text-white`}
	on:click={handleClick}
	{...variants}
	{...shapes}
	{loading}
>
	<Icon {as} {size} />
</Button>
