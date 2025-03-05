<script lang="ts">
  import Map from '$lib/components/base/map.mapbox.svelte';

  let map: mapboxgl.Map;
</script>

<Map bind:map />
