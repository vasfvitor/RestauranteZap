<script>
    import { manageCartItem, isCartOpen } from '~/components/Cart/cartStore';
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
        }
        manageCartItem(ItemInfo, action);
    }
</script>

<form class="inline-flex items-center gap-4 px-4 py-2 font-bold text-red-500" on:submit|preventDefault={(e) => handleCart(e)}>
   
    <slot />
</form>
