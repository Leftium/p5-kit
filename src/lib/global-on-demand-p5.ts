import { onMount } from 'svelte';

type P5Methods = Partial<{
  setup: () => void;
  draw: () => void;
  // TODO: add other P5 methods here;
}>

declare global {
	interface Window {
		remove?: () => void;
		setup?: () => void;
		draw?: () => void;
		// add other P5 methods here
	}
}

export function globalOnDemandP5(methods: P5Methods, parent: HTMLElement | string) {
	onMount(async function () {
		const { default: p5 } = await import('p5');

		// Remove P5 global instance (if it exists).
		if (typeof window.remove == 'function') {
			window.remove();
		}

		// methodName is now strongly typed
		for (const methodName of Object.keys(methods) as (keyof P5Methods)[]) {
			const fn = methods[methodName];
			if (fn) {
				window[methodName] = fn;
			}
		}

		// (Re)start P5.js in on-demand global mode.
		new p5(undefined, parent as HTMLElement | undefined);
	});
}

export default globalOnDemandP5;
