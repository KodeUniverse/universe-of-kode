<script lang="ts">
  import { onMount } from "svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardTitle from "$lib/components/ui/card/card-title.svelte";
  import CardFooter from "$lib/components/ui/card/card-footer.svelte";
  import ToolCard from "$lib/components/ui/ToolCard/ToolCard.svelte";
  import {scrambleText, animate} from "animejs";

  let headerTitle: HTMLElement;
  let headerBody: HTMLElement;

  const techTools = ["Python", "TypeScript", "PostgreSQL", "Linux","Neovim", "PyTorch","Docker", "Redis"]

  $effect(()=> {
    animate(headerTitle, {innerHTML: scrambleText()})
    animate(headerBody, {innerHTML: scrambleText()})
  })
</script>

<div id="page" class="flex flex-col items-center">
<div id="top-bar" class="flex justify-center items-center p-4 w-full">
    <Button variant="link">
        home
    </Button>
    <Button variant="link">
        thoughts
    </Button>
</div>
    <main id="content">
    <h1 bind:this={headerTitle} class="text-6xl my-20 ">Hello</h1>
    <p bind:this={headerBody} class="prose text-white">
    My name is Dakshin, I go by KodeUniverse on GitHub and the internet. Welcome to my site! I post projects and tech that I have created here, as well as highlight any interesting new tech or other interests I have. Feel free to drop a comment on any posts or reach out to my contacts!
    </p>
    <section id="biography">
        <h2 class="text-2xl my-8"> 
            My tools
        </h2>
        <div id="tools" class="grid grid-cols-5 grid-rows-2 gap-2">
        
        {#each techTools as tool}
        <ToolCard toolName={tool} /> 
        {/each}

        </div>
    </section>
    <section id="projects">
        <h2 class="text-2xl my-8">
             Projects i've been hacking on...
        </h2>
        <div class="project-cards grid gap-5 grid-cols-1" id="project-cards">
        <Card>
            <CardTitle>
                AlphaView Trading Dashboard
            </CardTitle>
            <CardContent>
                <p class="prose text-white">
                yadda yadda yap yap yap lmao...
                </p>
            </CardContent>
            <CardFooter class="flex gap-5">
                <Button>Link</Button>
                <Button>GitHub</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardTitle>
                Project 2
            </CardTitle>
            <CardContent>
            <p class="prose text-white">
                Hopefully something cool and not overdone and fucking useless
            </p>
            </CardContent>

            <CardFooter class="flex gap-5">
                <Button>Link</Button>
                <Button>GitHub</Button>
            </CardFooter>
        </Card>

        <Card>
            <CardTitle>
                Project 3 
            </CardTitle>
            <CardContent>
            <p class="prose text-white">
                Blah blah blah.. yap yap yap... more fucking talking.... all i do is fucking talk
            </p>
            </CardContent>
            <CardFooter class="flex gap-5">
                <Button>Link</Button>
                <Button>GitHub</Button>
            </CardFooter>
        </Card>
        </div>
    </section>
    </main>
</div>

<style>

    .project-cards :global([data-slot="card"]) {
        border-color: var(--border);
        transition: border-color 250ms ease-in-out;
    }
    .project-cards :global([data-slot="card"]:hover) {
        border-color: var(--glow);
        transition: border-color 250ms ease-in-out;
    }
    
    .project-cards :global([data-slot="card-title"]) {
        font-size: var(--text-xl);
        font-weight: 700px;
        margin: 10px; 
    }
</style>
