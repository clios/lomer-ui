<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/components/accordion');
  });
</script>

<svelte:head>
  <title>Components . lomer-ui</title>
</svelte:head>
