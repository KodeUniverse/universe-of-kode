<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import ThemeToggle from "$lib/components/ui/ThemeToggle/ThemeToggle.svelte";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div id="main-pg" class="h-screen flex flex-col items--center">
  <nav class="flex">
    <ThemeToggle />
  </nav>
  {@render children()}
</div>
