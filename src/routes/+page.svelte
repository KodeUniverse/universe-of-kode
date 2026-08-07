<script lang="ts">
  import { scrambleText, animate } from "animejs";
  import Card from "$lib/components/ui/card/card.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardTitle from "$lib/components/ui/card/card-title.svelte";
  import CardFooter from "$lib/components/ui/card/card-footer.svelte";
  import ToolCard from "$lib/components/ui/ToolCard/ToolCard.svelte";
  import { ExternalLinkIcon } from "@lucide/svelte";

  let mainTitle1: HTMLElement;
  let mainTitle2: HTMLElement;
  let mainSubtitle: HTMLElement;
  let mainDesc: HTMLElement;

  const techTools = [
    "Python",
    "TypeScript",
    "Rust",
    "Svelte",
    "React",
    "PostgreSQL",
    "Linux",
    "Neovim",
    "PyTorch",
    "Docker",
    "Redis",
  ];

  $effect(() => {
    animate(mainTitle1, { innerHTML: scrambleText() });
    animate(mainTitle2, { innerHTML: scrambleText() });
    animate(mainSubtitle, { innerHTML: scrambleText() });
    animate(mainDesc, { innerHTML: scrambleText() });
  });
</script>

<div id="page" class="flex flex-col items-center">
  <section
    id="home"
    class="flex min-h-[85vh] w-full max-w-3xl flex-col items-center justify-center px-4"
  >
    <h1 bind:this={mainTitle1} class="mb-3 font-bold md:text-4xl">
      Software Engineer
    </h1>
    <h1 bind:this={mainTitle2} class="mb-3 font-bold md:text-4xl">
      Quant Developer
    </h1>
    <p
      bind:this={mainSubtitle}
      class="mb-6 text-lg text-muted-foreground md:text-xl"
    >
      Full Stack | ML Systems | FinTech
    </p>
    <p
      bind:this={mainDesc}
      class="text-sm text-muted-foreground leading-relaxed md:text-base text-center"
    >
      Hello friend! My name is Dakshin, I go by KodeUniverse on GitHub. Welcome
      to my website! I showcase some of my programming projects here. Please
      check out the cool stuff below!
    </p>
    <div class="mt-8 flex gap-4">
      <a href="#projects"><Button variant="default">View Projects</Button></a>
      <a href="#contact"><Button variant="outline">Get in Touch</Button></a>
    </div>
  </section>

  <section id="about" class="section-border w-full max-w-3xl px-4">
    <div class="terminal-prompt mb-3 text-xs md:text-sm">$ cat about.txt</div>
    <p class="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
      Hi, I'm Dakshin. I work as a risk quant and software developer, and when
      I'm not at work I do open source development on my own projects, tinker
      with PC hardware, write progressive metal music, and enjoy city life. I
      love working on different kinds of projects and I end up exploring a wide
      variety of hobbies. Please contact me if you like what you see below
      and/or want to work with me! Always open to meet new people and learn from
      each other. :)
    </p>
  </section>

  <section id="skills" class="section-border mt-16 w-full max-w-3xl px-4">
    <div class="terminal-prompt mb-4 text-xs md:text-sm">$ ls -la ~/tools/</div>
    <div class="flex flex-wrap gap-2">
      {#each techTools as tool}
        <ToolCard toolName={tool} />
      {/each}
    </div>
  </section>

  <section id="projects" class="section-border mt-16 w-full max-w-3xl px-4">
    <div class="terminal-prompt mb-4 text-xs md:text-sm">$ cat projects.md</div>
    <div class="flex flex-col gap-5">
      <Card>
        <CardTitle>AlphaView Trading Dashboard</CardTitle>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Real-time market visualization platform for quants and retail
            algotraders with advanced charting tools and fundamental quant
            metrics. Built with TypeScript, Python, React, and WebSocket-based
            data pipelines.
          </p>
        </CardContent>
        <CardFooter class="flex gap-3">
          <Button
            href="https://github.com/KodeUniverse/alpha-view"
            variant="default"
            size="sm"
            ><ExternalLinkIcon />GitHub
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>PIXELSCAPE Pixel Art Editor</CardTitle>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Lightweight but powerful pixel art editor built as a terminal UI in
            Rust. Supports layers, mouse-based and key-based editing, brush
            sizes and types (fill, dithering, etc.), undo/redo, and
            transparency. Supports export to PNG and a custom project file
            format, and is cross-platform on Windows and Linux.
          </p>
        </CardContent>
        <CardFooter class="flex gap-3">
          <Button
            href="https://github.com/KodeUniverse/pixelscape"
            variant="default"
            size="sm"><ExternalLinkIcon />GitHub</Button
          >
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>GIF Fox Browser Extension</CardTitle>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            A Firefox browser extension that provides a simple and lightweight
            animated GIF picker to use animated reaction images on social media
            sites and forums. Uses KLIPY GIFs API as a data source, sign up for
            a free API key on klipy.com to use.
          </p>
        </CardContent>
        <CardFooter class="flex gap-3">
          <Button
            href="https://github.com/KodeUniverse/gif-fox"
            variant="default"
            size="sm"><ExternalLinkIcon />GitHub</Button
          >
        </CardFooter>
      </Card>
    </div>
  </section>

  <section id="contact" class="section-border mt-16 w-full max-w-3xl px-4">
    <div class="terminal-prompt mb-4 text-xs md:text-sm">$ ./contact.sh</div>
    <div class="flex flex-col gap-2 text-sm text-muted-foreground">
      <p><span class="text-hacker">email :</span> kodeuniverse@proton.me</p>
      <p><span class="text-hacker">github :</span> KodeUniverse</p>
      <p>
        <span class="text-hacker">location :</span> earth / new york city metropolitan
        area
      </p>
      <p class="mt-4 text-xs opacity-75">
        // always open to interesting conversations
      </p>
    </div>
  </section>

  <footer class="pb-8 pt-16 text-xs text-muted-foreground">
    <span class="terminal-prompt">$</span> echo "built with sveltekit + three.js +
    caffeine + sleep deprivation"
  </footer>
</div>
