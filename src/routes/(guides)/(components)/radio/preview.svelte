<script lang="ts">
    import Radio from '$lib/components/base/radio.svelte';
    let group = $state('');
</script>

<Radio value="radio1" label="Radio 1" bind:group>Content...</Radio>
<Radio value="radio2" label="Radio 2" bind:group>Content...</Radio>
<Radio value="radio3" label="Radio 3" bind:group>Content...</Radio>

<p>Value: {group}</p>
