<script lang="ts">
	import sizes from './sizes';
	import variants from './variants';
	import { ClassBuilder, find, getSize, getVariant, provide } from '../utils/system';

	// checkbox, radio, range, reset, submit, file is omitted
	type InputType =
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	type InputAutoComplete = 'on' | 'off' | undefined;
	interface IControlled {
		label: string;
		invalid?: boolean;
		helpMessage?: string;
		errorMessage?: string;
		required?: boolean;
	}

	/** Sizes */

	export let xs: boolean = undefined;
	export let sm: boolean = undefined;
	export let md: boolean = undefined;
	export let lg: boolean = undefined;

	/** Variants */

	export let outline: boolean = undefined;
	export let unstyled: boolean = undefined;
	export let filled: boolean = undefined;
	export let flushed: boolean = undefined;

	/** Component specific attributes */
	export let type: InputType = 'text';
	export let placeholder: string = '';
	export let autocomplete: InputAutoComplete = undefined;
	export let autofocus: boolean = undefined;
	export let disabled: boolean = undefined;
	export let readonly: boolean = undefined;
	export let name: string;
	export let value: string = undefined;

	/** Effects */
	export let controlled: IControlled = undefined;

	/** Component specific styles */
	export let fullWidth: boolean = false;

	const [size, sizeKey] = getSize({
		fromProps: { xs, sm, md, lg },
		as: sizes,
		fallback: 'sm'
	});

	const [variant, variantKey] = getVariant({
		fromProps: { flushed, unstyled, outline, filled },
		as: variants,
		fallback: 'outline'
	});
	$: attributes = {
		type,
		placeholder,
		autofocus,
		autocomplete,
		disabled,
		readonly,
		name,
		id: name
	};

	$: color = controlled?.invalid ? 'red' : 'blue';

	const inputBase = `
    relative
    transition-colors
    transition-shadow
    duration-300
    font-sans
    px-4
    m-0
    `;
	const cb = new ClassBuilder(inputBase);

	const classes = cb
		.add($$props.class)
		.add(() => variant(color))
		.add(size)
		.addIf(!$$slots.leftAddon && variantKey !== 'flushed', 'rounded-l-md')
		.addIf(!$$slots.rightAddon && variantKey !== 'flushed', 'rounded-r-md')
		.addIf(controlled?.invalid && variantKey === 'outline', 'ring-2 ring-red-500')
		.addIf(controlled?.invalid && variantKey === 'filled', 'ring-2 ring-red-500')
		.addIf(controlled?.invalid && variantKey === 'flushed', 'border-red-500')
		.addIf(fullWidth, 'w-full')

		.get();
</script>

<div class="space-y-2" role="group">
	{#if controlled}
		<label for={name} class={`my-3 flex items-center text-${sizeKey} h-2 font-medium`}>
			{#if controlled?.required}
				<span class="text-red-500 text-lg mr-2">&bull;</span>
			{/if}
			{controlled.label}
		</label>
	{/if}
	<span class="flex">
		{#if $$slots.leftAddon}
			<span class={`rounded-l-md flex items-center px-2 border border-r-0 ${size}`}
				><slot name="leftAddon" /></span
			>
		{/if}
		<input {...attributes} class={classes} required={controlled?.required} bind:value />
		{#if $$slots.rightAddon}
			<span class={`rounded-r-md flex items-center px-2 border border-l-0 ${size}`}
				><slot name="rightAddon" /></span
			>
		{/if}
	</span>

	{#if !controlled?.invalid && controlled?.helpMessage}
		<p class={`my-1 block text-${sizeKey} opacity-50`}>
			{controlled.helpMessage}
		</p>
	{/if}
	{#if controlled?.invalid && controlled?.errorMessage}
		<p class={`my-1 block text-${sizeKey} text-red-500`}>
			{controlled.errorMessage}
		</p>
	{/if}
</div>
