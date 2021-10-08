import { writable, get, derived } from 'svelte/store';
import _ from 'lodash';

type L2P = Record<string, number>;

const defaultPings = {
	stockholm: 90,
	lulea: 90,
	paris: 180,
	berlin: 120,
	marseille: 140,
	'sankt-petersburg': 90,
	zurich: 140,
	london: 220,
	reykjavik: 350,
	'new-york': 250,
	'las-vegas': 300,
	'san-francisco': 320,
	denver: 250,
	miami: 250,
	kapstaden: 770,
	kairo: 450,
	singapore: 450,
	taipei: 450,
	hongkong: 450,
	tokyo: 450,
	auckland: 750,
	melbourne: 750,
	sydney: 750
};
export const location2ping = writable<L2P>(defaultPings);

function handleUpdate(locations: L2P) {
	return _.mapValues(locations, (v: number) => {
		const newValue = v + (_.random(0, 1) ? -1 : 1) * _.random(0, 25);
		return _.clamp(newValue, 80, 1200);
	});
}

export function getPing(city: string): number {
	const l2p = get(location2ping);
	return l2p[city];
}

export const derivedPings = derived(location2ping, ($l2p, set) => {
	const interval = setInterval(() => {
		set(handleUpdate(defaultPings));
	}, 1250);

	return () => {
		clearInterval(interval);
	};
});
