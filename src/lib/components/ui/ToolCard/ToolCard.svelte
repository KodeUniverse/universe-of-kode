<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  import type { RGBValue } from "$types";
  import type { Snippet } from "svelte";
  let { toolName, children }: { toolName: string; children: Snippet } =
    $props();

  const toolColorMap: Record<string, RGBValue> = {
    python: { r: 55, g: 118, b: 171 },
    typescript: { r: 49, g: 120, b: 198 },
    rust: { r: 211, g: 69, b: 22 },
    svelte: { r: 255, g: 62, b: 0 },
    react: { r: 97, g: 219, b: 251 },
    docker: { r: 29, g: 99, b: 237 },
    javascript: { r: 240, g: 219, b: 79 },
  };

  const bgColor: RGBValue = $derived(
    toolColorMap[toolName] ?? { r: 128, g: 128, b: 128 },
  );
  const opacity = 0.6;
</script>

<div
  id="tool-card"
  class="flex-row gap-2 py-2 px-2 justify-center"
  style="background-color: {`rgb(${bgColor?.r} ${bgColor?.g} ${bgColor?.b} / ${opacity * 100}%)`};"
>
  <p class="text-muted-foreground text-sm">{@render children()}</p>
</div>
