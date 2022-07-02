<script>
    // @hmr:keep-all
    import { globalOnDemandP5 } from '$lib/global-on-demand-p5.js'
    globalOnDemandP5({setup, draw}, 'p5-sketch');


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

<div class=flex-wrap>
    <main>
        <div id=p5-sketch />
        <p>Based on: </p>
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

    main {
        background-color: #fefefe;
    }

    main p {
        padding: 0 .4em;
    }

</style>
