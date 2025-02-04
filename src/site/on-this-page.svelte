<script>
  import Button from '$lib/components/ui/button.svelte';
</script>

<div class="sticky top-10 hidden xl:block">
  <aside class="absolute right-0 flex w-64 flex-col gap-2 text-left text-sm">
    <p class="mb-1 font-semibold">On this page</p>
    <slot />

    <div class="mt-8 rounded-sm border p-4">
      <p class="text-xl font-semibold">Support lomer-ui</p>
      <p class="my-2">
        Become a sponsor and help me enhance the development experience for
        Svelte users!
      </p>
      <Button
        class="mt-4"
        onclick={() =>
          window.open('https://github.com/sponsors/clios', '_blank')}
        >Become a Sponsor</Button
      >
    </div>
  </aside>
</div>
