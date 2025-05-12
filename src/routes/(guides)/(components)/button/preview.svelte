<script lang="ts">
    import Avatar from '$lib/components/base/avatar.svelte';
    import Button from '$lib/components/base/button.svelte';
    import IconLomerUi from '$lib/components/icons/icon-lomer-ui.svelte';
</script>

<Button>Default</Button>
<Button variant="inverted">Inverted</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button edge="circle">Circle</Button>
<Button edge="sharp">Sharp</Button>
<Button>
    <IconLomerUi />
    With Icon
</Button>
<Button size="icon">
    <IconLomerUi />
</Button>
<Button size="fit">
    <Avatar src="https://avatars.githubusercontent.com/u/16535340?v=4&quot" />
</Button>
<Button size="small">Small</Button>
