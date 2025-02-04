<script lang="ts">
  import { type Snippet } from 'svelte';
  import { fade } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    isOpen: boolean;
  };

  let {
    children,
    class: className,
    isOpen = $bindable(false)
  }: Props = $props();

  let el: HTMLDivElement | null = $state(null);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let contentBoxSize = $state();

  function adjustPosition() {
    if (!el) return;
    if (!el?.previousElementSibling) return;

    const triggerRect = el.previousElementSibling.getBoundingClientRect();
    const dropdownRect = el.getBoundingClientRect();

    if (triggerRect.bottom + dropdownRect.height + 16 > innerHeight) {
      if (triggerRect.top - 16 < dropdownRect.height) {
        el.style.top = 16 + 'px';
        el.style.bottom = 16 + 'px';
      } else {
        el.style.top = triggerRect.top - dropdownRect.height - 8 + 'px';
      }
    } else {
      el.style.top = triggerRect.bottom + 8 + 'px';
    }
  }

  $effect(() => {
    if (contentBoxSize) adjustPosition();
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if isOpen}
  <div
    bind:this={el}
    bind:contentBoxSize
    in:fade={{ duration: 150 }}
    class={twMerge(
      'fixed z-50 h-fit max-h-[calc(100vh-2rem)] rounded border p-2',
      'bg-popup text-popup-fg flex min-w-[220px] flex-col text-nowrap',
      'gap-1 overflow-auto select-none',
      '[&_*]:transition-colors',

      // FOR SCROLL
      'overflow-auto scroll-smooth ',
      '[&::-webkit-scrollbar]:w-1',
      '[&::-webkit-scrollbar-track]:rounded-full',
      '[&::-webkit-scrollbar-track]:bg-none',
      'hover:[&::-webkit-scrollbar-track]:bg-border',
      '[&::-webkit-scrollbar-thumb]:rounded-full',
      '[&::-webkit-scrollbar-thumb]:bg-none',
      'hover:[&::-webkit-scrollbar-thumb]:bg-fg/50',

      // FOR BUTTON
      '[&>.dropdown-item-button]:active:bg-popup-fg/10',
      '[&>.dropdown-item-button]:bg-popup',
      '[&>.dropdown-item-button]:border-none',
      '[&>.dropdown-item-button]:disabled:focus:bg-popup',
      '[&>.dropdown-item-button]:disabled:hover:bg-popup',
      '[&>.dropdown-item-button]:disabled:text-disabled',
      '[&>.dropdown-item-button]:focus:bg-popup-fg/5',
      '[&>.dropdown-item-button]:gap-2',
      '[&>.dropdown-item-button]:hover:bg-popup-fg/5',
      '[&>.dropdown-item-button]:outline-none',
      '[&>.dropdown-item-button]:text-popup-fg',

      // FOR CHECKBOX
      '[&>.dropdown-item-checkbox>div]:group-active:outline-none',
      '[&>.dropdown-item-checkbox>div]:group-focus:outline-none',
      '[&>.dropdown-item-checkbox>div]:group-hover:outline-none',
      '[&>.dropdown-item-checkbox>div]:ml-2',
      '[&>.dropdown-item-checkbox>div]:top-1.5',
      '[&>.dropdown-item-checkbox]:active:bg-popup-fg/10',
      '[&>.dropdown-item-checkbox]:bg-popup',
      '[&>.dropdown-item-checkbox]:disabled:focus:bg-popup',
      '[&>.dropdown-item-checkbox]:disabled:hover:bg-popup',
      '[&>.dropdown-item-checkbox]:disabled:text-disabled',
      '[&>.dropdown-item-checkbox]:focus:bg-popup-fg/5',
      '[&>.dropdown-item-checkbox]:hover:bg-popup-fg/5',
      '[&>.dropdown-item-checkbox]:py-[6px]',
      '[&>.dropdown-item-checkbox]:sm:py-1',
      '[&>.dropdown-item-checkbox]:text-popup-fg',
      '[&>.dropdown-item-checkbox_div]:border-none',

      // FOR RADIO
      '[&>.dropdown-item-radio>div]:border',
      '[&>.dropdown-item-radio>div]:group-active:outline-none',
      '[&>.dropdown-item-radio>div]:group-focus:outline-none',
      '[&>.dropdown-item-radio>div]:group-hover:outline-none',
      '[&>.dropdown-item-radio>div]:left-0.5',
      '[&>.dropdown-item-radio>div]:ml-2',
      '[&>.dropdown-item-radio>div]:top-1.5',
      '[&>.dropdown-item-radio]:active:bg-popup-fg/10',
      '[&>.dropdown-item-radio]:bg-popup',
      '[&>.dropdown-item-radio]:disabled:focus:bg-popup',
      '[&>.dropdown-item-radio]:disabled:hover:bg-popup',
      '[&>.dropdown-item-radio]:disabled:text-disabled',
      '[&>.dropdown-item-radio]:focus:bg-popup-fg/5',
      '[&>.dropdown-item-radio]:hover:bg-popup-fg/5',
      '[&>.dropdown-item-radio]:pl-10',
      '[&>.dropdown-item-radio]:py-[6px]',
      '[&>.dropdown-item-radio]:rounded',
      '[&>.dropdown-item-radio]:sm:py-1',
      '[&>.dropdown-item-radio]:text-popup-fg',
      '[&>.dropdown-item-radio_.text-muted]:text-muted/10',

      // FOR SWITCH
      '[&>.dropdown-item-switch]:bg-b',
      '[&>.dropdown-item-switch]:border-none',
      '[&>.dropdown-item-switch]:disabled:focus:bg-bg',
      '[&>.dropdown-item-switch]:disabled:hover:bg-bg',
      '[&>.dropdown-item-switch]:disabled:text-disabled',
      '[&>.dropdown-item-switch]:flex-row-reverse',
      '[&>.dropdown-item-switch]:gap-2',
      '[&>.dropdown-item-switch]:items-center',
      '[&>.dropdown-item-switch]:justify-between',
      '[&>.dropdown-item-switch]:outline-none',
      '[&>.dropdown-item-switch]:pl-3',
      '[&>.dropdown-item-switch]:mb-2',
      '[&>.dropdown-item-switch]:rounded',
      '[&>.dropdown-item-switch]:text-popup-fg',

      // FOR ACCORDION
      '[&_.dropdown-item-accordion>button>p]:font-medium',
      '[&_.dropdown-item-accordion>button]:active:bg-popup-fg/10',
      '[&_.dropdown-item-accordion>button]:bg-popup',
      '[&_.dropdown-item-accordion>button]:focus:bg-popup-fg/5',
      '[&_.dropdown-item-accordion>button]:hover:bg-popup-fg/5',
      '[&_.dropdown-item-accordion>button]:px-3',
      '[&_.dropdown-item-accordion>button]:py-[6px]',
      '[&_.dropdown-item-accordion>button]:rounded',
      '[&_.dropdown-item-accordion>button]:text-popup-fg',
      '[&_.dropdown-item-accordion>div]:flex',
      '[&_.dropdown-item-accordion>div]:flex-col',
      '[&_.dropdown-item-accordion>div]:mr-2',
      '[&_.dropdown-item-accordion>div]:px-3',
      '[&_.dropdown-item-accordion>div]:py-2',
      '[&_.dropdown-item-accordion>div]:rounded',
      '[&_.dropdown-item-accordion>div]:bg-popup',
      '[&_.dropdown-item-accordion>div]:text-popup-fg',
      '[&_.dropdown-item-accordion]:px-0',
      '[&_.dropdown-item-accordion]:bg-popup',
      '[&_.dropdown-item-accordion]:bg-popup',

      // FOR INPUT
      '[&>div>.dropdown-item-input]:my-2',
      '[&>div>.dropdown-item-input]:px-3',
      '[&>div>.dropdown-item-input]:w-full',

      className
    )}
  >
    {@render children?.()}
  </div>
  <!-- BACKDROP -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    onclick={() => (isOpen = false)}
    transition:fade={{ duration: 100 }}
    class={twMerge('bg-bg/5 fixed top-0 right-0 bottom-0 left-0 z-40')}
  ></div>
{/if}
