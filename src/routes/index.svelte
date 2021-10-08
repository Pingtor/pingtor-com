<script lang="ts">
	import World from '../components/world.svelte';
	let m = { x: 0, y: 0 };
	function handleMouseMove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<svelte:head>
	<title>Pingtor - start imagine.</title>
</svelte:head>
<div
	class="flex items-center justify-center h-full w-full relative cursor-none"
	on:mousemove={handleMouseMove}
>
	<div class="cursor-custom" style="top: {m.y}px; left: {m.x}px" />
	<World />
</div>

<style>
	.cursor-custom {
		z-index: 10;
		position: absolute;
		background-color: rgba(245, 245, 245, 0.4);
		border-radius: 50%;
		height: 1em;
		width: 1em;
		pointer-events: none;
		transform: translate(calc(-50% - 2em), calc(-50% - 2em));
	}
</style>
