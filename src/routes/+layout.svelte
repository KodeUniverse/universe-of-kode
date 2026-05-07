<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import NavBar from "$lib/components/ui/NavBar/NavBar.svelte";
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div id="main-pg" class="h-screen flex flex-col items--center">
  <NavBar --background-color="firebrick" />
  {@render children()}
</div>
