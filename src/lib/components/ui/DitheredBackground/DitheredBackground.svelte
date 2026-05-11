<script lang="ts">
    import {onMount} from "svelte";
    import renderBackground from "$lib/vanilla/DitheredWavesBG.ts" 

    let animRoot: HTMLElement;
    let { children } = $props();

    onMount(() => {
        renderBackground(animRoot);
    }) 

</script>

<div id="star-bg" bind:this={animRoot}></div>
<div id="star-bg-overlay">
    {#if children}
        {@render children()}
    {/if}
</div>

<style>
    #star-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
    }
    #star-bg-overlay {
        position: relative;
        z-index: 1;
        min-height: 100vh;
    }
</style>

