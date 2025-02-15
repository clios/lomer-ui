<script lang="ts">
  import Select from '$lib/components/ui/select.svelte';
</script>

<Select
  options={[
    { group: 'Colors' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green', disabled: true },
    { value: 'yellow', label: 'Yellow' }
  ]}
/>
