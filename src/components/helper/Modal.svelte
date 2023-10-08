<script lang="ts">
    import { fade } from 'svelte/transition';
    export let showModal: boolean, id: string, isFullScreen: boolean;
    let dialog: HTMLDialogElement;

    $: {
        if (dialog && showModal) {
            dialog.showModal();
        }
    }
    /*
<svelte:body on:visibilitychange={CheckOverflow} />
    function CheckOverflow() {
        if (dialog && showModal) {
            console.log('add');
            //document.body.classList.add('modal-open');
            document.body.classList.add('overflow-y-hidden');
        } else {
            console.log('remove');
            //document.body.classList.remove('modal-open');
            document.body.classList.remove('overflow-y-hidden');
        }
    }*/
    let classes: string;
    if (isFullScreen) {
        classes = 'h-screen w-full rounded-none';
    } else {
        classes = 'max-w-screen-lg';
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    transition:fade={{ duration: 100 }}
    class="modal"
    {id}
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class:modal-open={showModal}
        class:overflow-hidden={showModal}
        class={`modal-box m-0 max-h-none max-w-none p-0 ${classes}`}
        on:click|stopPropagation
    >
        <!-- svelte-ignore a11y-autofocus -->
        <button class="btn btn-circle btn-sm absolute right-4 top-4" on:click={() => dialog.close()}
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg
            >
        </button>
        <slot name="header" />
        <slot />
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
