<script lang="ts">
  import { scrambleText, animate } from "animejs";
  import Card from "$lib/components/ui/card/card.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardTitle from "$lib/components/ui/card/card-title.svelte";
  import CardFooter from "$lib/components/ui/card/card-footer.svelte";
  import ToolCard from "$lib/components/ui/ToolCard/ToolCard.svelte";

  let heroTitle: HTMLElement;
  let heroSubtitle: HTMLElement;

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
    animate(heroTitle, { innerHTML: scrambleText() });
    animate(heroSubtitle, { innerHTML: scrambleText() });
  });
</script>

<div id="page" class="flex flex-col items-center">
  <section
    id="hero"
    class="flex min-h-[85vh] w-full max-w-3xl flex-col items-center justify-center px-4"
  >
    <h1 bind:this={heroTitle} class="mb-3 text-4xl font-bold md:text-7xl">
      KodeUniverse
    </h1>
    <p
      bind:this={heroSubtitle}
      class="mb-6 text-lg text-muted-foreground md:text-2xl"
    >
      Software Engineer
    </p>
    <p
      class="text-sm text-muted-foreground leading-relaxed md:text-base text-center"
    >
      Hello friend! My name is Dakshin, I go by KodeUniverse on GitHub. Please
      check out the cool stuff I have below.
    </p>
    <div class="mt-8 flex gap-4">
      <a href="#projects"><Button variant="default">View Projects</Button></a>
      <a href="#contact"><Button variant="outline">Get in Touch</Button></a>
    </div>
  </section>

  <section id="about" class="section-border w-full max-w-3xl px-4">
    <div class="terminal-prompt mb-3 text-xs md:text-sm">$ cat about.txt</div>
    <p class="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
      Hi, I'm Dakshin. I work as quantitative risk analyst, and when I'm not at
      work I do open source development, design video games, play metal guitar,
      and tinker with my PC hardware. I love working on different kinds of
      projects and I end up exploring a wide variety of practices. Please
      contact me if you like what you see below and/or want to work with me!
      Always open to meet new people :)
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
            Real-time market visualization platform with advanced charting,
            portfolio tracking, and paper trading. Built with Python, React, and
            WebSocket-based data pipelines.
          </p>
        </CardContent>
        <CardFooter class="flex gap-3">
          <Button href="#" variant="default" size="sm">Link</Button>
          <Button
            href="https://github.com/KodeUniverse/alpha-view"
            variant="outline"
            size="sm">GitHub</Button
          >
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>PIXELSCAPE Pixel Art Editor</CardTitle>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Lightweight pixel art editor built as a terminal UI in Rust. Vim
            keybinds, layer support, animation sequencing, and export to PNG,
            GIF, and sprite sheet formats.
          </p>
        </CardContent>
        <CardFooter class="flex gap-3">
          <Button href="#" variant="default" size="sm">Link</Button>
          <Button
            href="https://github.com/KodeUniverse/pixelscape"
            variant="outline"
            size="sm">GitHub</Button
          >
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>KodeQuery</CardTitle>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            CLI database exploration tool with intelligent schema discovery,
            natural language query translation, and beautiful terminal output.
            Supports PostgreSQL, SQLite, and Redis backends.
          </p>
        </CardContent>
        <CardFooter class="flex gap-3">
          <Button href="#" variant="default" size="sm">Link</Button>
          <Button href="#" variant="outline" size="sm">GitHub</Button>
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
    <span class="terminal-prompt">$</span> echo "built with svelte + tailwind + three.js
    + caffeine + sleep deprivation"
  </footer>
</div>
