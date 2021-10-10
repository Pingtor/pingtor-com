<script>
</script>

<nav class="flex justify-between px-8 pt-2">
	<span class="font-serif text-theme-white font-bold text-2xl">Pingtor</span>
</nav>
<main class="w-full px-8">
	<slot />
</main>
<footer class="bg-white" />

<style global lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Georama:wght@100;200;700;900&display=swap');
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		/*class="w-screen h-screen bg-purple-1000" */
		@apply bg-purple-1000 p-12 w-screen h-screen relative;
	}
	main {
		height: calc(100vh - 6rem);
	}
</style>
