<script lang="ts">
	import Input from '$lib/ping-ui/Input/Input.svelte';
	import FiPlus from 'svelte-icons-pack/fi/FiPlus';
	import Button from '../lib/ping-ui/Button/Button.svelte';
	let loading = true;
</script>

<section class="p-3 bg-white w-full h-full space-y-8">
	<section class="flex space-x-2">
		<Button {loading}>Upload</Button>
		<Button leftIcon={FiPlus}>Upload</Button>
		<Button outline>Upload</Button>
		<Button link>Upload</Button>
		<Button ghost>Upload</Button>
	</section>

	<section class="flex space-x-2">
		<Input name="outline" xs outline placeholder="outline" />
		<Input name="filled" xs filled placeholder="filled" />
		<Input name="flushed" xs flushed placeholder="flushed" />
		<Input name="unstyled" xs unstyled placeholder="unstyled" />
	</section>

	<section class="flex space-x-2">
		<Input name="outline-1" xs outline placeholder="outline">
			<p slot="leftAddon">www</p>
		</Input>
		<Input name="outline-2" xs outline placeholder="filled">
			<p slot="rightAddon">.com</p>
		</Input>
		<Input name="outline-2" xs outline placeholder="filled">
			<p slot="leftAddon">www</p>
			<p slot="rightAddon">.com</p>
		</Input>
	</section>

	<section class="flex space-x-2">
		<Input
			name="controlled"
			xs
			outline
			placeholder="outline"
			controlled={{
				required: true,
				invalid: true,
				label: 'Label',
				helpMessage: 'help',
				errorMessage: 'error'
			}}
		/>
		<Input
			name="controlled"
			xs
			outline
			placeholder="outline"
			controlled={{
				required: false,
				invalid: true,
				label: 'Label',
				helpMessage: 'help',
				errorMessage: 'error'
			}}
		/>
		<Input
			name="controlled"
			lg
			outline
			placeholder="outline"
			controlled={{
				required: false,
				invalid: true,
				label: 'Label',
				helpMessage: 'help',
				errorMessage: 'error'
			}}
		/>
		<Input
			name="controlled"
			lg
			flushed
			placeholder="outline"
			controlled={{
				required: true,
				invalid: true,
				label: 'Label',
				helpMessage: 'help',
				errorMessage: 'error'
			}}
		/>
	</section>
</section>
