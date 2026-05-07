<script lang="ts">
  import ThemeToggle from "../ThemeToggle/ThemeToggle.svelte";
</script>

<nav class="flex h-1/14 items-center bg-card">
  <div id="nav-settings">
    <ThemeToggle />
  </div>
</nav>

<style>
  #nav-settings {
    margin-left: auto;
    margin-right: 10px;
  }
</style>
