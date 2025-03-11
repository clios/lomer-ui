<script lang="ts">
  import 'mapbox-gl/dist/mapbox-gl.css';
  import mapboxgl from 'mapbox-gl';
  import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public';
  import { onDestroy, onMount, type Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    map?: mapboxgl.Map;
    options?: Omit<mapboxgl.MapOptions, 'container'>;
  };

  let { class: className, map = $bindable(), options }: Props = $props();

  let mapElement: HTMLDivElement;

  onMount(() => {
    const { Map } = mapboxgl;

    map = new Map({
      container: mapElement,
      accessToken: PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
      ...options
    });
  });

  onDestroy(() => {
    if (map) map.remove();
  });
</script>

<div class={twMerge('relative h-80 w-full overflow-hidden rounded', className)}>
  <div class="absolute h-full w-full" bind:this={mapElement}></div>
</div>
