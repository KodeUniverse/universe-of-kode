<script lang="ts">
  import { Button } from "../button";
  import { Sun, Moon } from "@lucide/svelte";
  interface Theme {
    current: string;
  }

  let theme = $state<Theme>({ current: "dark" });

  function onclick() {
    if (theme.current === "dark") {
      theme.current = "light";
    } else {
      theme.current = "dark";
    }
  }
  $effect(() => {
    document.documentElement.setAttribute("class", theme.current);
  });
</script>

<div id="theme-toggle">
  <Button {onclick}>
    {#if theme.current === "light"}
      <Moon />
    {:else}
      <Sun />
    {/if}
  </Button>
</div>

<style>
  #theme-toggle {
    margin: 5px;
  }
</style>
