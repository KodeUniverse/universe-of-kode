<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  const logoModules = import.meta.glob("$lib/assets/logos/*.{svg,png}", {eager: true, query: "?url"})
  
  const toolImageMap: Record<string, string> = {};
  // logo files must be named as toolName.svg|png
  for (const [path, module] of Object.entries(logoModules)){
    const pathChunks = path.split("/");
    const fileName = pathChunks[pathChunks.length - 1];

    const key = fileName.replace(/.(svg|png)/, "");
    toolImageMap[key] = module.default;
  }
    
    let { toolName }: {toolName: string} = $props();
    console.log(JSON.stringify(toolImageMap))
</script>
        
        <Card class="tool-card flex-row gap-2 py-2 px-2 justify-center">
            <img src={toolImageMap[toolName.toLowerCase()]} class="w-6 h-7 justify-center"/> 
            <p>{toolName}</p>
        </Card>

