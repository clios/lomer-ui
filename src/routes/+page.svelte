<script>
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
  import IconSvelte from '$lib/components/icons/icon-svelte.svelte';
  import IconTailwindcss from '$lib/components/icons/icon-tailwindcss.svelte';
  import IconTypescript from '$lib/components/icons/icon-typescript.svelte';
  import LinkButton from '$lib/components/base/link-button.svelte';
  import Screen from '$lib/components/screen.svelte';
  import { goto } from '$app/navigation';
  import IconLomerUi from '$lib/components/icons/icon-lomer-ui.svelte';
</script>

<svelte:head>
  <title>lomer-ui</title>
</svelte:head>

<div class="relative flex flex-col gap-16 mx-auto mb-8 w-full max-w-[1200px]">
  <section class="flex justify-between items-center lg:text-xl">
    <p class="flex items-end text-sm">
      <span>Svelte</span>
      <span class="mb-[1px] pl-1 text-primary text-sm">v5</span>
      <span class="px-2 text-muted text-sm">&</span>
      <span>Tailwind CSS</span>
      <span class="mb-[1px] pl-1 text-primary text-sm">v4</span>
    </p>

    <div class="flex items-center gap-2">
      <LinkButton
        variant="ghost"
        size="icon"
        href="https://github.com/sponsors/clios"
        target="_blank"
      >
        <Icon class="inline size-6 text-primary" icon="mdi:heart-outline" />
      </LinkButton>
      <LinkButton
        variant="ghost"
        size="icon"
        href="https://ko-fi.com/clios"
        target="_blank"
      >
        <Icon class="inline size-6 text-primary" icon="mdi:coffee" />
      </LinkButton>
    </div>
  </section>

  <section class="text-muted lg:text-xl">
    <p class="text-center">
      <span>Standalone components for </span>
      <span class="text-orange-500">Svelte</span>
      <br class="sm:hidden" />
      <span>powered by</span>
      <span class="text-cyan-500">Tailwind CSS</span>.
    </p>
    <div class="flex justify-center gap-1">
      <IconTypescript class="text-muted" />
      <IconSvelte class="text-muted" />
      <IconTailwindcss class="text-muted" />
    </div>
  </section>

  <div class="place-content-center grid lg:text-xl">
    <p class="text-primary text-3xl lg:text-4xl text-center">lomer-ui</p>
    <p class="text-muted text-center">Keep It Simply Styled</p>
    <div class="flex justify-center gap-4 mt-8">
      <Button class="text-nowrap" onclick={() => goto('/docs/intro')}>
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

  <section class="text-muted lg:text-xl text-center">
    <p>
      A dead-simple <span class="font-semibold text-fg">CLI tool</span>
      to
      <span class="font-semibold text-fg">instant</span>ly
      <br class="sm:hidden" />
      kickstart your
      <span class="font-semibold text-fg">components</span>.
    </p>
    <p class="mt-8 sm:mt-0">
      No extra UI libraries required.<br class="sm:hidden" /> Just clean,
      standalone code <br class="sm:hidden" />
      <span class="font-semibold text-fg">ready to use</span>.
    </p>
  </section>

  <section
    class="flex flex-col items-center gap-2 text-muted lg:text-xl text-center"
  >
    <p>
      <span class="font-semibold text-fg">Start</span>
      <span>building your own <br class="sm:hidden" /> components</span>
      <span class="font-semibold text-fg">with CLI</span>.
    </p>
    <div class="mx-auto border border-muted rounded w-72 h-min overflow-hidden">
      <div
        class="flex justify-between bg-muted px-4 py-1 w-full text-bg text-sm"
      >
        <p>CLI</p>
      </div>
      <div class="overflow-x-auto text-fg text-sm text-left">
        <pre><code>
{`\t$ npx lomer-ui get button
\t✅ Component "button" added.`}
    </code></pre>
      </div>
    </div>
    <p>That's it!</p>
  </section>

  <section class="border-b border-dotted"></section>

  <section class="text-muted lg:text-xl">
    <p class="text-fg lg:text-2xl text-center">
      The Zero Configuration UI Library.
    </p>
  </section>

  <section class="flex flex-wrap justify-center gap-8">
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="mdi:tools" />
        <p class="mt-2 text-primary">No Setup Required</p>
        <p class="text-muted">
          Works immediately after installation or copying the components.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="ix:box-open" />
        <p class="mt-2 text-primary">Minimal or No Dependencies</p>
        <p class="text-muted">
          Avoids requiring third-party libraries for styling or behavior.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="heroicons:paint-brush-solid" />
        <p class="mt-2 text-primary">Pre-styled Components</p>
        <p class="text-muted">
          Comes with sensible default styles, but still allows customization.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="bxs:plug" />
        <p class="mt-2 text-primary">Plug-and-Play</p>
        <p class="text-muted">
          Components can be used directly in a project without additional setup.
        </p>
      </Screen>
    </div>
    <div class="max-w-72">
      <Screen class="flex-col items-center rounded text-center">
        <Icon class="size-10" icon="mingcute:settings-6-fill" />
        <p class="mt-2 text-primary">Simple API</p>
        <p class="text-muted">
          Uses clear, intuitive props or configurations for quick use.
        </p>
      </Screen>
    </div>
  </section>

  <section class="border-b border-dotted"></section>

  <section class="text-muted lg:text-xl">
    <p class="text-fg lg:text-2xl text-center">Coming Soon...</p>
  </section>

  <section class="text-center">
    <p>Using CLI to craft components using recipes.</p>
    <p>Actions. (outsideClick, focusTrap, etc...)</p>
  </section>
</div>
