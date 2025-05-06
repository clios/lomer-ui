<script lang="ts">
  import Banner from '$lib/components/base/banner.svelte';
  import Button from '$lib/components/base/button.svelte';
  import IconLomerUi from '$lib/components/icons/icon-lomer-ui.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open banner</Button>
<Banner bind:open>
  <IconLomerUi />
  <a href="/" class="flex items-center underline-offset-2 hover:underline">Lomer UI</a>
  <p class="text-muted">Open-source resource for crafting project-specific UI components.</p>
</Banner>
