<script lang="ts">
  import Radio from '$lib/components/ui/radio.svelte';
  let group = $state('');
</script>

<Radio value="free" label="Free" bind:group>Helper text</Radio>
<Radio value="pro" label="Pro" bind:group>Helper text</Radio>
<Radio value="enterprise" label="Enterprise" bind:group>Helper text</Radio>

<p>Group: {group}</p>
