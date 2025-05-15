<script>
    import Button from '$lib/components/base/button.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Section from '$lib/components/base/section.svelte';
    import Stack from '$lib/components/base/stack.svelte';
    import Title from '$lib/components/base/title.svelte';
</script>

<Section class="mx-auto items-center @3xl:flex-row-reverse @5xl:max-w-[1000px]">
    <img class="w-full max-w-64 @4xl:max-w-96 @5xl:max-w-[500px]" src="/gaming_pc.png" alt="gaming_pc" />
    <Stack autoGap>
        <Stack class="gap-1 text-center @3xl:text-left">
            <Title>Enhance your gaming experience</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt asperiores.
            </Paragraph>
        </Stack>
        <Stack class="justify-center @3xl:justify-start" horizontal autoGap>
            <Button variant="primary">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
        </Stack>
    </Stack>
</Section>
