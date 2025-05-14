<script lang="ts">
    import Radio from '$lib/components/base/radio.svelte';
    let group = $state('');
</script>

<Radio value="radio1" label="Radio 1" bind:group>
    <p>Optional content here</p>
</Radio>
<Radio value="radio2" label="Radio 2" bind:group />
<Radio value="radio3" label="Radio 3" bind:group />

<p>Value: {group}</p>
