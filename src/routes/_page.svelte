<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/components/base/button.svelte';
  import LinkButton from '$lib/components/base/link-button.svelte';
  import IconLomerUi from '$lib/components/icons/icon-lomer-ui.svelte';
  import IconSvelte from '$lib/components/icons/icon-svelte.svelte';
  import IconTailwindcss from '$lib/components/icons/icon-tailwindcss.svelte';
  import IconTypescript from '$lib/components/icons/icon-typescript.svelte';
  import Icon from '@iconify/svelte';
  import Screen from '$lib/components/screen.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';

  const tickler = [
    {
      id: '1',
      label: 'Installation'
    },
    {
      id: '2',
      label: 'Usage'
    },
    {
      id: '3',
      label: 'Single mode'
    }
  ];
</script>

<PageWrapper
  {tickler}
  title="lomer-ui"
  sub="Component"
  info="Expand and collapse content with ease."
  prevLabel="CLI"
  prevLink="/docs/cli"
  nextLabel="Alert"
  nextLink="/components/alert"
>
  <PageSection></PageSection>
</PageWrapper>

<div class="grid gap-16">
  <section class="mt-8 grid gap-8">
    <article class="grid justify-center gap-4">
      <p class="text-center">
        <span>Standalone components for </span>
        <span class="text-orange-500">Svelte</span>
        <br class="sm:hidden" />
        <span>powered by</span>
        <span class="text-cyan-500">Tailwind CSS</span>.
      </p>
      <div class="my-16">
        <IconLomerUi class="text-muted mx-auto size-28" />
        <p class="text-fg text-center font-mono text-5xl">
          lo<span class="font-sans">m</span>er-ui
        </p>
      </div>
      <div class="mx-auto my-8 flex gap-4">
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
    </article>

    <article class="grid justify-center gap-4">
      <p class="text-muted text-center">Zero config.</p>

      <p class="text-muted text-center">
        A dead-simple <span class="text-fg font-semibold">CLI tool</span>
        to
        <span class="text-fg font-semibold">instant</span>ly
        <br class="sm:hidden" />
        kickstart your
        <span class="text-fg font-semibold">components</span>.
      </p>
      <p class="text-muted text-center">
        No extra UI libraries required.<br class="sm:hidden" /> Just clean,
        standalone code <br class="sm:hidden" />
        <span class="text-fg font-semibold">ready to use</span>.
      </p>
    </article>
  </section>

  <section class="grid gap-8">
    <article class="grid justify-center gap-4">
      <p class="text-center">Built with</p>
    </article>
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
</div>
