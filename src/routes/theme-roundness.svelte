<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import { onMount } from 'svelte';

  type Variant = 'default' | 'inverted' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';

  interface Round {
    name: string;
    display: string;
    value: number;
  }

  let { radiusVal = $bindable() } = $props();

  const roundness: Array<Round> = [
    {
      name: '0',
      display: '0',
      value: 0
    },
    {
      name: '25',
      display: '.25',
      value: 0.25
    },
    {
      name: '50',
      display: '.50',
      value: 0.5
    },
    {
      name: '75',
      display: '.75',
      value: 0.75
    },
    {
      name: '1',
      display: '1.0',
      value: 1
    }
  ];

  function setRoundness(round: Round) {
    const className = `roundness-${round.name}`;

    roundness.forEach((r) => {
      const existingClass = `roundness-${r.name}`;
      document.body.classList.remove(existingClass);
    });

    document.body.classList.add(className);
    radiusVal = round.name;

    localStorage.setItem('theme-radius', round.name);
  }

  onMount(() => {
    let localRadius = localStorage.getItem('theme-radius') || 'zinc';
    setRoundness({ name: localRadius, display: '', value: 0 });
  });
</script>

<div class="my-2 px-2">
  <p class="mb-1 text-sm">Roundness</p>
  <div class="flex gap-1">
    {#each roundness as round}
      {@const variant = radiusVal == round.name ? 'default' : 'inverted'}
      <Button class="justify-center w-8" size="small" variant={variant as Variant} onclick={() => setRoundness(round)}>
        {round.display}
      </Button>
    {/each}
  </div>
</div>
