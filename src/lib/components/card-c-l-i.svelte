<script lang="ts">
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    let { code } = $props();
</script>

<div class="mt-4">
    <LomerTitle level={2}>Skip this guide.</LomerTitle>
    <Paragraph>Quickly try this on your project.</Paragraph>
    <CopyCLI {code} />
</div>
