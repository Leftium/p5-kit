// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// p5-global.d.ts
	declare function createCanvas(width: number, height: number): p5.Renderer;
	declare function noStroke(): void;
	declare function dist(x1: number, y1: number, x2: number, y2: number): number;
	declare function background(value: number): void;
	declare function ellipse(x: number, y: number, w: number, h: number): void;

	// Globals provided by p5
	declare const width: number;
	declare const height: number;
	declare const mouseX: number;
	declare const mouseY: number;
}

export {};
