<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
</script>

<!-- Variants -->
<div class="flex gap-2">
  <Button>Default</Button>
  <Button variant="inverted">Inverted</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>

<!-- Behaviour -->
<div class="flex gap-2">
  <Button disabled>Disabled</Button>
  <Button loading>Loading</Button>
</div>

<!-- Edges -->
<div class="flex gap-2">
  <Button edge="circle">Circle</Button>
  <Button edge="sharp">Sharp</Button>
</div>

<!-- Sizes -->
<div class="flex">
  <Button class="border-none rounded-l" edge="sharp">1</Button>
  <Button class="border-none" edge="sharp">2</Button>
  <Button class="border-none" edge="sharp">3</Button>
  <Button class="border-none" edge="sharp">4</Button>
  <Button class="border-none rounded-r" edge="sharp">5</Button>
</div>
