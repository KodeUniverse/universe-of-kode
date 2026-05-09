<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import NavBar from "$lib/components/ui/NavBar/NavBar.svelte";
  import StarBackground from "$lib/components/ui/StarBackground/StarBackground.svelte" 
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div id="root" class="h-screen w-screen">
  <StarBackground>
  {@render children()}
  </StarBackground>
</div>
