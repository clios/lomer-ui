<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Link from '$lib/components/ui/link.svelte';
</script>

<p>This is <Link href="/">inline link</Link> by default as it should be.</p>

<Link href="/">
  <Button>Button as link</Button>
</Link>
