<script>
    import Button from '$lib/components/base/button.svelte';
    import Field from '$lib/components/base/field.svelte';
    import Input from '$lib/components/base/input.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Section from '$lib/components/base/section.svelte';
    import Select from '$lib/components/base/select.svelte';
    import Stack from '$lib/components/base/stack.svelte';
    import Title from '$lib/components/base/title.svelte';
</script>

<div class="bg-[url(/city_bg.jpg)] bg-cover bg-center">
    <Section class="from-bg/100 to-bg/50 via-bg/80 bg-gradient-to-r">
        <Stack>
            <Title>Free your mind, get wrecked</Title>
            <Paragraph class="@2xl:max-w-[700px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus perspiciatis quo a laborum inventore
                dolores!
            </Paragraph>
        </Stack>
        <Button variant="secondary">Explore More</Button>
        <Stack
            autoGap
            autoPadding
            class="bg-primary/5 border-primary/15 rounded border @sm:max-w-96 @5xl:max-w-[800px] @5xl:flex-row @5xl:items-center @5xl:justify-between"
        >
            <Field label="Search destination">
                <Input placeholder="Address" />
            </Field>
            <Field label="Date range" class="@5xl:flex-row">
                <Input type="date" />
                <Input type="date" />
            </Field>
            <Field label="Total guest">
                <Select>
                    <option>1</option>
                    <option>2</option>
                    <option>3-5</option>
                    <option>6-10</option>
                    <option>10+</option>
                </Select>
            </Field>

            <Button variant="primary" class="mt-4 self-end @5xl:mt-0">Search{@render IconSearch()}</Button>
        </Stack>
    </Section>
</div>

{#snippet IconSearch()}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path
            fill="currentColor"
            d="M7 2a5 5 0 1 0 0 10A5 5 0 0 0 7 2M0 7a7 7 0 1 1 12.606 4.192l3.101 3.1l-1.414 1.415l-3.1-3.1A7 7 0 0 1 0 7"
        />
    </svg>
{/snippet}
