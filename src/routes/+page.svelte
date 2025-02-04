<script>
  import Button from '$lib/components/ui/button.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import Dialog from '$lib/components/ui/dialog.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/ui/link.svelte';
  import { goto } from '$app/navigation';
  import Screen from '$lib/components/screen.svelte';
</script>

<svelte:head>
  <title>lomer-ui</title>
</svelte:head>

<Dialog class="max-w-96" title="Hi devs," isOpen>
  <p class="text-muted mt-4">
    I'm currently rebuilding this project to provide a better experience.
  </p>
  <p class="text-muted mt-4">Will be back soon.</p>
  <p class="text-muted mt-4">Clios, lomer-ui dev.</p>
</Dialog>

<div class="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
  <section class="flex justify-between lg:text-xl">
    <p class="flex items-end text-sm">
      <span>Svelte</span>
      <span class="text-primary mb-[1px] pl-1 text-sm">v5</span>
      <span class="text-muted px-2 text-sm">&</span>
      <span>Tailwind CSS</span>
      <span class="text-primary mb-[1px] pl-1 text-sm">v4</span>
    </p>

    <Link
      class="items-center text-sm no-underline sm:flex"
      href="https://github.com/sponsors/clios"
      target="_blank"
    >
      <span class="hidden sm:inline">Sponsor</span>
      <Icon class="text-primary inline size-6" icon="mdi:heart-outline" />
    </Link>
  </section>

  <section class="text-muted lg:text-xl">
    <p class="text-center">
      <span>Standalone components for </span>
      <span class="text-orange-500">Svelte</span>
      <br class="sm:hidden" />
      <span>powered by</span>
      <span class="text-cyan-500">Tailwind CSS</span>.
    </p>
  </section>

  <div class="grid place-content-center lg:text-xl">
    <p class="text-primary text-center text-3xl lg:text-4xl">lomer-ui</p>
    <p class="text-muted text-center">Keep It Simply Styled</p>
    <div class="mt-8 flex justify-center gap-4">
      <Button class="text-nowrap" onclick={() => goto('/docs/introduction')}>
        Get Started
      </Button>

      <Button
        variant="secondary"
        onclick={() =>
          window.open('https://github.com/clios/lomer-ui', '_blank')}
      >
        <Icon class="size-5" icon="mdi:github" />
        GitHub</Button
      >
    </div>
  </div>

  <section class="text-muted text-center lg:text-xl">
    <p>
      A dead-simple <span class="text-fg font-semibold">CLI tool</span>
      to
      <span class="text-fg font-semibold">instant</span>ly
      <br class="sm:hidden" />
      kickstart your
      <span class="text-fg font-semibold">components</span>.
    </p>
    <p class="mt-8 sm:mt-0">
      No extra UI libraries required.<br class="sm:hidden" /> Just clean,
      standalone code <br class="sm:hidden" />
      <span class="text-fg font-semibold">ready to use</span>.
    </p>
  </section>

  <section
    class="text-muted flex flex-col items-center gap-2 text-center lg:text-xl"
  >
    <p>
      <span class="text-fg font-semibold">Start</span>
      <span>building your own <br class="sm:hidden" /> components</span>
      <span class="text-fg font-semibold">with CLI</span>.
    </p>
    <CopyCLI code="npx lomer-ui add" />
    <p>That's it!</p>
  </section>

  <section class="border-b border-dotted"></section>

  <section class="text-muted lg:text-xl">
    <p class="text-fg text-center lg:text-2xl">
      The Zero Configuration UI Library.
    </p>
  </section>

  <section class="flex flex-wrap justify-center gap-8">
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="mdi:tools" />
        <p class="text-primary mt-2">No Setup Required</p>
        <p class="text-muted">
          Works immediately after installation or copying the components.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="ix:box-open" />
        <p class="text-primary mt-2">Minimal or No Dependencies</p>
        <p class="text-muted">
          Avoids requiring third-party libraries for styling or behavior.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="heroicons:paint-brush-solid" />
        <p class="text-primary mt-2">Pre-styled Components</p>
        <p class="text-muted">
          Comes with sensible default styles, but still allows customization.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="bxs:plug" />
        <p class="text-primary mt-2">Plug-and-Play</p>
        <p class="text-muted">
          Components can be used directly in a project without additional setup.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="mingcute:settings-6-fill" />
        <p class="text-primary mt-2">Simple API</p>
        <p class="text-muted">
          Uses clear, intuitive props or configurations for quick use.
        </p>
      </Screen>
    </div>
  </section>

  <section class="text-muted lg:text-xl">
    <p class="mx-auto max-w-[600px] text-center">
      Works out of the box without requiring developers to configure settings,
      install dependencies, or write extra setup code. The goal is to provide
      pre-styled, ready-to-use components that integrate seamlessly into
      projects with minimal effort.
    </p>
  </section>
</div>
