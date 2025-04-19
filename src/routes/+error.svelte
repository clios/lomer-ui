<script lang="ts">
  import Section from '$lib/components/base/section.svelte';
  import { page } from '$app/state';
</script>

<Section>
  <p class="pt-16 text-muted-fg text-9xl text-center">{page.status}</p>
  <p class="pb-24 text-muted text-4xl text-center">{page.error?.message}</p>
</Section>
