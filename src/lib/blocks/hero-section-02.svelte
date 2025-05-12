<script>
    import Article from '$lib/components/base/article.svelte';
    import Button from '$lib/components/base/button.svelte';
    import Page from '$lib/components/base/page.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Section from '$lib/components/base/section.svelte';
</script>

<Page>
    <Section>
        <img
            class="w-full max-w-96 justify-self-center @md:col-start-2 @md:row-span-3 @md:self-center @lg:max-w-[500px]"
            src="/gaming_pc.png"
            alt="gaming_pc"
        />
        <Paragraph>Enhance your gaming experience</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt asperiores.</Paragraph>
        <Article>
            <Button variant="primary">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
        </Article>
    </Section>
</Page>
