<script lang="ts">
    import {onMount} from "svelte";
    import renderBackground from "$lib/vanilla/DitheredWavesBG.ts" 

    let animRoot: HTMLElement;
    let { children } = $props();

    $effect(() => {
        renderBackground(animRoot);
    }) 

</script>

<div id="dithered-bg" bind:this={animRoot}></div>
<div id="bg-site-overlay">
    {#if children}
        {@render children()}
    {/if}
</div>

<style>
    #dithered-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
    }
    #bg-site-overlay {
        position: relative;
        z-index: 1;
        min-height: 100vh;
    }
</style>

