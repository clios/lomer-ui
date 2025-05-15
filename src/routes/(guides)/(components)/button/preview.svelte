<script lang="ts">
    import Button from '$lib/components/base/button.svelte';
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
    {@render IconLomerUI()}
    With Icon
</Button>
<Button size="icon">
    {@render IconLomerUI()}
</Button>
<Button size="fit">
    <img class="size-7 rounded" src="https://avatars.githubusercontent.com/u/16535340?v=4&quot" alt="avatar" />
</Button>
<Button size="small">Small</Button>
<Button href="#">This is link</Button>

{#snippet IconLomerUI()}
    <svg xmlns="http://www.w3.org/2000/svg" class="max-w-6 min-w-6" viewBox="0 0 208 208">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M104 0L0 104L104 208L208 104L104 0ZM82 126H52L30 104L104 30L178 104L156 126H126L148 104L104 60L60 104L82 126Z"
            fill="currentColor"
        />
    </svg>
{/snippet}
