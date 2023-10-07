<script>
    import { fade } from 'svelte/transition';

    export let ID, title; // props
</script>

<section
    in:fade={{ duration: 100, delay: 250 }}
    out:fade={{ duration: 100 }}
    class="container flex flex-col px-4 py-8 md:p-8"
    id={ID}
>
    <div class="container my-2 flex flex-col border-y-2 border-gray-200 py-2">
        <div class="prose my-8">
            <h2>{title}</h2>
        </div>
        <slot />
    </div>
</section>
