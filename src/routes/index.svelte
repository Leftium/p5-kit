<script>
    // @hmr:keep-all
    import { globalOnDemandP5 } from '$lib/global-on-demand-p5.js'
    globalOnDemandP5({setup, draw});

    // Top level variables are preserved by Svelte.
    let x;

    function setup() {
        createCanvas(500, 300);
        x = x || width/2;
    }

    function draw() {
        background(200);
        x = (x + 1) % width;
        line(x, 0, x, height);
    }
</script>
