<script>
    import { verticalNavigation } from '$lib/actions/vertical-navigation.svelte';
    import Button from '$lib/components/base/button.svelte';
</script>

<div class="flex flex-col gap-4" use:verticalNavigation>
    <div class="mb-2">
        <p>Focus a button below.</p>
        <p>Then use up/down arrow keys to navigate.</p>
    </div>
    <Button variant="ghost">Button 1</Button>
    <Button variant="ghost">Button 2</Button>
    <Button variant="ghost">Button 3</Button>
    <Button variant="ghost">Button 4</Button>
</div>
