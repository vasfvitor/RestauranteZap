<script>
    import { manageCartItem, isCartOpen } from '~/components/SvelteCart/cartStore';
    export let itemId, itemName, itemPrice;

    let ItemInfo = {
        id: itemId,
        name: itemName,
        imageSrc: '/images/astronaut-figurine.png', // TODO: make icons for each category
        price: itemPrice,
    };

    function handleCart(e) {
        const action = e.submitter.value;
        if (action === 'add') {
            isCartOpen.set(true);
            manageCartItem(ItemInfo, 'add');
        } else {
            manageCartItem(ItemInfo, 'remove');
        }
    }
</script>

<form class="inline-flex gap-4 px-4 py-2 font-bold text-red-500" on:submit|preventDefault={(e) => handleCart(e)}>
    <slot />
</form>
