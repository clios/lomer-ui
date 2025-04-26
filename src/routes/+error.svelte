<script lang="ts">
  import Section from '$lib/components/base/section.svelte';
  import { page } from '$app/state';
</script>

<Section>
  <p class="text-muted-fg pt-16 text-center text-9xl">{page.status}</p>
  <p class="text-muted pb-24 text-center text-4xl">{page.error?.message}</p>
</Section>
