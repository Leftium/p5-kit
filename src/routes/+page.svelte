<script lang="ts">
	let max_distance: number;

	function setup() {
		createCanvas(710, 400);
		noStroke();
		max_distance = dist(0, 0, width, height);
	}

	function draw() {
		background(0);
		for (let i = 0; i <= width; i += 20) {
			for (let j = 0; j <= height; j += 20) {
				let size = dist(mouseX, mouseY, i, j);
				size = (size / max_distance) * 66;
				ellipse(i, j, size, size);
			}
		}
	}

	///--- P5-Kit scaffolding stuff starts here. ---///

	// @hmr:keep-all
	import { globalOnDemandP5 } from '$lib/global-on-demand-p5.js';
	globalOnDemandP5({ setup, draw }, 'p5-sketch');

	let sketch: HTMLDivElement;

	let mouseMode = $state('wander'); // 'control', 'follow'

	let clientHeight = $state(0);

	let mouseX = $state(0),
		maxMouseX = $state(0);
	let mouseY = $state(0),
		maxMouseY = $derived(clientHeight - 4);

	function handleMousemove(e: MouseEvent) {
		if (mouseMode == 'follow') {
			const rect = sketch.getBoundingClientRect();
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top;
		}
	}

	function onclick(e: MouseEvent) {
		mouseMode = mouseMode !== 'wander' ? 'wander' : 'follow';
		handleMousemove(e);
	}

	function onmousedown() {
		mouseMode = 'control';
	}

	let t = 0;
	function step() {
		if (mouseMode == 'wander') {
			t += 10;
			mouseX = ((Math.cos(t / 1009) + 1) / 2) * maxMouseX;
			mouseY = ((Math.sin(t / 1549) + 1) / 2) * maxMouseY;
		}
		requestAnimationFrame(step);
	}

	if (typeof window != 'undefined') {
		requestAnimationFrame(step);
	}
</script>

<svelte:body on:mousemove={handleMousemove} />

<div class="flex-wrap">
	<main>
		<div
			id="p5-sketch"
			bind:this={sketch}
			bind:clientWidth={maxMouseX}
			bind:clientHeight
			{onclick}
			role="none"
		></div>
		<div class="panel">
			<p>
				Based on: <a href="https://archive.p5js.org/examples/math-distance-2d.html">
					https://archive.p5js.org/examples/math-distance-2d.html
				</a>
			</p>
			<p>Mouse Mode: {mouseMode}</p>
			<p>
				<label>
					mouseX
					<input type="range" bind:value={mouseX} min="0" max={maxMouseX} step="10" {onmousedown} />
					{Math.floor(mouseX)}
				</label>
			</p>
			<p>
				<label>
					mouseY
					<input type="range" bind:value={mouseY} min="0" max={maxMouseY} step="10" {onmousedown} />
					{Math.floor(mouseY)}
				</label>
			</p>
		</div>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		background-image: url(/img/wild_oliva.png);
		font-family: sans-serif;
	}

	.flex-wrap {
		height: 100vh;

		display: grid;
		place-items: center;
	}

	.panel {
		background-color: #fefefe;
		padding: 0.4em;
	}
</style>
