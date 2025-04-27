<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  interface Color {
    name: string;
    bg: string;
  }

  let { primaryColor = $bindable() } = $props();

  const primaries: Array<Color> = [
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
    },
    {
      name: 'red',
      bg: 'bg-red-500'
    },
    {
      name: 'orange',
      bg: 'bg-orange-500'
    },
    {
      name: 'amber',
      bg: 'bg-amber-500'
    },
    {
      name: 'yellow',
      bg: 'bg-yellow-500'
    },
    {
      name: 'lime',
      bg: 'bg-lime-500'
    },
    {
      name: 'green',
      bg: 'bg-green-500'
    },
    {
      name: 'emerald',
      bg: 'bg-emerald-500'
    },
    {
      name: 'teal',
      bg: 'bg-teal-500'
    },
    {
      name: 'cyan',
      bg: 'bg-cyan-500'
    },
    {
      name: 'sky',
      bg: 'bg-sky-500'
    },
    {
      name: 'blue',
      bg: 'bg-blue-500'
    },
    {
      name: 'indigo',
      bg: 'bg-indigo-500'
    },
    {
      name: 'violet',
      bg: 'bg-violet-500'
    },
    {
      name: 'purple',
      bg: 'bg-purple-500'
    },
    {
      name: 'fuchsia',
      bg: 'bg-fuchsia-500'
    },
    {
      name: 'pink',
      bg: 'bg-pink-500'
    },
    {
      name: 'rose',
      bg: 'bg-rose-500'
    }
  ];

  function setPrimary(color: Color) {
    const className = `primary-${color.name}`;

    primaries.forEach((c) => {
      const existingClass = `primary-${c.name}`;
      document.body.classList.remove(existingClass);
    });

    document.body.classList.add(className);
    primaryColor = color.name;

    localStorage.setItem('theme-primary', color.name);
  }

  onMount(() => {
    let localPrimary = localStorage.getItem('theme-primary') || 'cyan';
    setPrimary({ name: localPrimary, bg: '' });
  });
</script>

<div class="my-2 px-2">
  <p class="mb-1 text-sm">Primary Color</p>
  <div class="flex flex-wrap gap-1">
    {#each primaries as primary}
      <Button
        title={primary.name}
        onclick={() => setPrimary(primary)}
        class={`border-none ${primary.bg} text-white`}
        size="icon"
      >
        <div class="size-4">
          {#if primary.name === primaryColor}
            <Icon icon="mdi:check" />
          {/if}
        </div>
      </Button>
    {/each}
  </div>
</div>
