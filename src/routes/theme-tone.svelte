<script lang="ts">
    import Button from '$lib/components/base/button.svelte';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    interface Color {
        name: string;
        bg: string;
    }

    let { toneColor = $bindable() } = $props();

    const tones: Array<Color> = [
        {
            name: 'slate',
            bg: 'bg-slate-500'
        },
        {
            name: 'gray',
            bg: 'bg-gray-500'
        },
        {
            name: 'zinc',
            bg: 'bg-zinc-500'
        },
        {
            name: 'neutral',
            bg: 'bg-neutral-500'
        },
        {
            name: 'stone',
            bg: 'bg-stone-500'
        }
    ];

    function setTone(color: Color) {
        const className = `tone-${color.name}`;

        tones.forEach((c) => {
            const existingClass = `tone-${c.name}`;
            document.body.classList.remove(existingClass);
        });

        document.body.classList.add(className);
        toneColor = color.name;

        localStorage.setItem('theme-general', color.name);
    }

    onMount(() => {
        let localGeneral = localStorage.getItem('theme-general') || 'zinc';
        setTone({ name: localGeneral, bg: '' });
    });
</script>

<div class="my-2 px-2">
    <p class="mb-1 text-sm">General Color</p>
    <div class="flex flex-wrap gap-1">
        {#each tones as tone}
            <Button
                title={tone.name}
                onclick={() => setTone(tone)}
                class={`border-none ${tone.bg} text-white`}
                size="icon"
            >
                <div class="size-4">
                    {#if tone.name === toneColor}
                        <Icon icon="mdi:check" />
                    {/if}
                </div>
            </Button>
        {/each}
    </div>
</div>
