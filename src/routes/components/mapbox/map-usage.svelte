<script lang="ts">
  import Map from '$lib/components/base/map.mapbox-gl.svelte';

  let map: mapboxgl.Map;
</script>

<Map bind:map />
