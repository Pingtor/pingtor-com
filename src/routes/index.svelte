<script lang="ts">
	import World from '../components/world.svelte';
</script>

<svelte:head>
	<title>Pingtor</title>
</svelte:head>

<div class="w-full h-full relative flex items-center">
	<div class="text-theme-white font-serif">
		<h1
			class="font-black text-6xl max-w-md text-transparent bg-clip-text bg-gradient-to-br from-theme-pink to-theme-yellow"
		>
			Wholesaler<br /><span class="font-light text-theme-white"
				>of colocation</span
			>
		</h1>
		<p class="mt-8">Datacenter experts with 10+ years of experience</p>
	</div>
	<aside class="grid absolute w-full top-0">
		<div class="justify-self-end bg">
			<World />
		</div>
	</aside>
</div>

<style>
	.bg {
		width: 60%;
	}
</style>
