<script>
  import Button from '$lib/components/base/button.svelte';
</script>

<div class="container mx-auto grid gap-4 p-2 md:grid-cols-2 md:grid-rows-[1fr_auto_1fr] md:gap-2 md:gap-x-8 md:p-4">
  <img
    class="w-full max-w-96 justify-self-center md:col-start-2 md:row-span-3 md:self-center lg:max-w-[500px]"
    src="/gaming_pc.png"
    alt="gaming_pc"
  />
  <p class="text-center text-xl sm:font-semibold md:row-start-1 md:self-end md:text-left lg:text-3xl xl:text-4xl">
    Enhance your gaming experience
  </p>
  <p
    class="text-muted max-w-[500px] justify-self-center text-center md:max-w-none md:self-center md:text-left lg:text-xl"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt asperiores.
  </p>
  <div class="flex gap-2 justify-self-center md:justify-self-start lg:mt-4 xl:mt-8">
    <Button variant="primary">Buy now</Button>
    <Button variant="ghost">Add to cart</Button>
  </div>
</div>
