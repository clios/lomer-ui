<script lang="ts">
  import Input from '$lib/components/ui/input.svelte';

  let value = $state('');
</script>

<Input bind:value />
<Input disabled value="This is disabled" />
