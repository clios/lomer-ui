<script lang="ts">
  import AvatarRaw from '$lib/components/base/avatar.svelte?raw';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Avatar</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Avatar</Title>
  <Paragraph>Display user profiles with a touch of personality.</Paragraph>
  <CardBoard class="flex-col gap-4">
    <Preview />
  </CardBoard>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Create avatar component.</Title>
  <CopySvelteCode open title="avatar.svelte" code={AvatarRaw} />
</Section>
