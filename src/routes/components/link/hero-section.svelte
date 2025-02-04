<script lang="ts">
  import Link from '$lib/components/ui/link.svelte';
  import Screen from '$lib/components/screen.svelte';
</script>

<Screen>
  <div class="flex h-20 items-center justify-center gap-8">
    <Link href="#">lomer-ui</Link>
    <Link class="no-underline" href="#">lomer-ui</Link>
    <Link class="no-underline" href="#" caret>lomer-ui</Link>
  </div>
</Screen>
