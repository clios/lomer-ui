<script lang="ts">
    import Textarea from '$lib/components/base/textarea.svelte';

    let value = $state('');
</script>

<Textarea bind:value />
<p>Value: {value}</p>
