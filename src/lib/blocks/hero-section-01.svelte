<script>
  import Button from '$lib/components/base/button.svelte';
</script>

<div class="container mx-auto flex flex-col items-center gap-8 p-8">
  <Button class="gap-2 py-0 pr-2 pl-1" variant="secondary" edge="circle">
    <span class="bg-primary text-primary-fg my-1 rounded-full px-3 py-1 text-sm">New</span>
    Introducing Lomer UI Blocks
    {@render IconChevronRight()}
  </Button>
  <h1 class="text-center text-3xl font-semibold">Stress free customizable blocks</h1>
  <p class="text-muted container mx-auto text-center text-xl lg:max-w-[1000px]">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui dolorem aperiam itaque incidunt neque
    perferendis corporis eos corrupti praesentium?
  </p>
  <div class="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
    <Button class="w-full max-w-72 justify-center sm:w-fit">Get Started</Button>
    <Button class="w-full max-w-72 justify-center sm:w-fit" variant="secondary">Contribute</Button>
  </div>
  <div class="flex flex-col items-center gap-2">
    <p class="text-muted text-sm">SPONSORS</p>
    <div class="flex gap-8">
      <div class="flex flex-col items-center">
        {@render IconFacebook()}
        <p class="text-muted text-xs">Facebook</p>
      </div>
      <div class="flex flex-col items-center">
        {@render IconAmazon()}
        <p class="text-muted text-xs">Amazon</p>
      </div>
      <div class="flex flex-col items-center">
        {@render IconGoogle()}
        <p class="text-muted text-xs">Google</p>
      </div>
    </div>
  </div>
</div>

{#snippet IconChevronRight()}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
{/snippet}

{#snippet IconFacebook()}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
    />
  </svg>
{/snippet}

{#snippet IconAmazon()}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21.997 18.23c0 .727-.405 2.127-1.315 2.896c-.182.14-.364.061-.284-.143c.265-.648.871-2.147.587-2.492c-.201-.262-1.031-.242-1.739-.182c-.323.041-.607.06-.827.105c-.204.016-.245-.163-.041-.303a3.1 3.1 0 0 1 .87-.428c1.15-.344 2.479-.137 2.67.083c.036.042.079.16.079.463m-1.922 1.294a7 7 0 0 1-.829.55c-2.122 1.275-4.871 1.943-7.258 1.943c-3.843 0-7.28-1.417-9.888-3.788c-.224-.182-.039-.446.223-.303c2.81 1.64 6.288 2.632 9.888 2.632c2.266 0 4.708-.424 7.035-1.336c.163-.061.345-.144.504-.202c.367-.165.69.242.325.504m-6.17-11.03c0-1.041.042-1.654-.303-2.18c-.306-.433-.833-.693-1.569-.652c-.798.044-1.655.567-1.873 1.526c-.043.22-.171.436-.437.483l-2.435-.31c-.174-.04-.439-.173-.352-.521C7.459 4.088 9.81 3.129 12.034 3h.522c1.22 0 2.788.349 3.791 1.264c1.217 1.136 1.087 2.662 1.087 4.32v3.927c0 1.178.478 1.7.958 2.314c.13.219.175.477-.044.655a78 78 0 0 1-1.917 1.654c-.175.133-.489.147-.61.045c-.77-.645-.958-1.003-1.435-1.658c-.83.871-1.527 1.352-2.356 1.613a7 7 0 0 1-1.784.216c-2.09 0-3.745-1.303-3.745-3.88c0-2.049 1.09-3.442 2.7-4.101c1.61-.66 3.95-.87 4.704-.874m-.477 5.192c.52-.872.477-1.586.477-3.185c-.652 0-1.306.045-1.871.178c-1.045.303-1.875.96-1.875 2.355c0 1.09.568 1.832 1.526 1.832q.198 0 .348-.045c.67-.186 1.088-.522 1.395-1.135"
    />
  </svg>
{/snippet}

{#snippet IconGoogle()}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"
    />
  </svg>
{/snippet}
