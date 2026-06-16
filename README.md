# universe of kode

personal website at [kodeuniverse.dev](https://kodeuniverse.dev).

built with [sveltekit](https://kit.svelte.dev), [three.js](https://threejs.org), and [tailwind css](https://tailwindcss.com). background is a real-time dithered wave shader rendered with three.js. text animations via [animejs](https://animejs.com).

## developing

```bash
bun install
bun run dev
```

## building

```bash
bun run build
```

output goes to `build/`. preview with `bun run preview`.

## deploying

pushes to `main` deploy automatically via github actions to github pages. see `.github/workflows/deploy.yml`.

## license

mit
