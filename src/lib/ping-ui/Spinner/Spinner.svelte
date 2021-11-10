<svg class={`animate-spin`} viewBox="0 0 50 50">
	<circle
		class="stroke-current"
		cx="25"
		cy="25"
		r="20"
		fill="none"
		stroke-width="5"
		stroke-linecap="round"
	/>
</svg>

<style>
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
	circle {
		animation: dash 1.5s ease-in-out infinite;
	}
</style>
