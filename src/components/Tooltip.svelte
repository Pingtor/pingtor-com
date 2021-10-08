<script lang="ts">
	import { location2ping, derivedPings } from '../store/pings';

	export let city;
	let ping;

	derivedPings.subscribe((l2p) => {
		ping = l2p[city];
	});
</script>

<div id="tooltip" role="tooltip" class="px-4 py-1 rounded-sm bg-pink-600 font-bold">
	{city}
	{ping} ms
</div>
