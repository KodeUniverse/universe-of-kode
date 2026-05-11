<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import NavBar from "$lib/components/ui/NavBar/NavBar.svelte";
  import DitheredBackground from "$lib/components/ui/DitheredBackground/DitheredBackground.svelte" 
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div id="root" class="min-h-screen w-screen">
  <DitheredBackground>
  {@render children()}
  </DitheredBackground>
</div>
