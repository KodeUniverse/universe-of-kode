<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";

  import pythonLogo from "$lib/assets/python-logo.svg";
  import typescriptLogo from "$lib/assets/typescript-logo.svg";
  import postgresLogo from "$lib/assets/postgres-logo.png";
  import linuxLogo from "$lib/assets/linux-logo.png";
  import neovimLogo from "$lib/assets/neovim-logo.svg";
  import dockerLogo from "$lib/assets/docker-logo.svg";
  import redisLogo from "$lib/assets/redis-logo.svg";
  import pyTorchLogo from "$lib/assets/pytorch-logo.png";
  import svelteLogo from "$lib/assets/svelte-logo.svg";
  import reactLogo from "$lib/assets/react-logo.svg";

    let { toolName }: {toolName: string} = $props();
   
   const toolImageMap = {
    python: pythonLogo,
    typescript: typescriptLogo,
    postgresql: postgresLogo,
    linux: linuxLogo,
    neovim: neovimLogo,
    docker: dockerLogo,
    redis: redisLogo,
    pytorch: pyTorchLogo,
    svelte: svelteLogo,
    react: reactLogo
   }

</script>
        
        <Card class="tool-card flex-row gap-2 py-2 px-2 justify-center">
            <img src={toolImageMap[toolName.toLowerCase()]} class="w-6 h-7 justify-center"/> 
            <p>{toolName}</p>
        </Card>

