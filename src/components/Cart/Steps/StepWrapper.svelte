<script>
    import { fade } from 'svelte/transition';
    export let ID, title; // props
</script>

<section in:fade={{ duration: 250 }} class=" border-y-2 border-gray-200 px-4 py-8 md:p-8" id={ID}>
    <div class="my-2">
        <div class="prose my-8">
            <h2>{title}</h2>
        </div>
        <slot />
    </div>
</section>
