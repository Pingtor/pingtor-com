<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import variants from './variants';
	import sizes from './sizes';
	import { ClassBuilder, getShape, getSize, getVariant } from '../utils/system';
	import Icon from '../Icon/Icon.svelte';
	import shapes from './shapes';
	import Spinner from '../Spinner/Spinner.svelte';
	import { fade } from 'svelte/transition';

	/** Sizes */

	export let sm = undefined;
	export let md = undefined;
	export let lg = undefined;
	export let xl = undefined;

	/** Variants */
	export let ghost = undefined;
	export let outline = undefined;
	export let solid = undefined;
	export let link = undefined;

	/** Shapes */
	export let circle = undefined;
	export let square = undefined;

	/** Component specific attributes */
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let leftIcon: SVGElement | undefined = undefined;
	export let rightIcon: SVGElement | undefined = undefined;

	/** Component specific styles */
	export let fullWidth: boolean = false;
	export let href: string | undefined = undefined;

	const buttonBase = `
	inline-flex
	justify-center
	items-center
	border
	px-4
	text-sm
	font-sans 
	rounded-md
	duration-300
	ring-4 
	ring-transparent 
	transition-colors
	disabled:opacity-60
    disabled:cursor-not-allowed`;

	const cb = new ClassBuilder(buttonBase);
	const [variant] = getVariant({
		fromProps: { ghost, solid, outline, link },
		as: variants,
		fallback: 'solid'
	});

	const [size] = getSize({
		fromProps: { sm, md, lg, xl },
		as: sizes,
		fallback: 'sm'
	});

	const [shape] = getShape({
		fromProps: { square, circle },
		as: shapes
	});
	const classes = cb
		.flush()
		.add($$props.class)
		.add(() => variant('null'))
		.add(`h-${size}`)
		.add(() => shape(size))
		.add(fullWidth ? 'w-full' : '')
		.get();

	const dispatch = createEventDispatcher();

	function handleClick(e) {
		dispatch('click', e);
	}
</script>

{#if href}
	<a class={classes} {href}>
		{#if leftIcon}
			<span class="mr-1">
				<Icon as={leftIcon} />
			</span>
		{/if}
		<div class="relative">
			{#if loading}
				<span
					transition:fade
					class="flex justify-center items-center h-full w-full absolute"
				>
					<span class="h-4 w-4">
						<Spinner />
					</span>
				</span>
			{/if}
			<span
				class={`${
					loading
						? 'opacity-0 text-transparent invisible'
						: 'opacity-100 text-current'
				} transition-opacity duration-300`}
			>
				<slot />
			</span>
		</div>
		{#if rightIcon}
			<span class="ml-1">
				<Icon as={rightIcon} />
			</span>
		{/if}
	</a>
{:else}
	<button class={classes} disabled={disabled || loading} on:click={handleClick}>
		{#if leftIcon}
			<span class={`mr-1`}>
				<Icon as={leftIcon} />
			</span>
		{/if}
		<div class="relative">
			{#if loading}
				<span
					transition:fade
					class="flex justify-center items-center h-full w-full absolute"
				>
					<span class="h-4 w-4">
						<Spinner />
					</span>
				</span>
			{/if}
			<span
				class={`${
					loading
						? 'opacity-0 text-transparent invisible'
						: 'opacity-100 text-current'
				} transition-opacity duration-300`}
			>
				<slot />
			</span>
		</div>
		{#if rightIcon}
			<span class="ml-1">
				<Icon as={rightIcon} />
			</span>
		{/if}
	</button>
{/if}
