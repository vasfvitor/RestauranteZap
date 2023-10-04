<script>
    import { manageCartItem, isCartOpen } from '~/components/Svelte/cartStore';
    export let itemId;
    export let itemName;
    export let itemPrice;

    let ItemInfo = {
        id: itemId,
        name: itemName,
        imageSrc: '/images/astronaut-figurine.png', // TODO: make icons for each category
        price: itemPrice,
    };

    function addToCart() {
        isCartOpen.set(true);
        manageCartItem(ItemInfo, 'add');
    }

    function removeFromCart() {
        manageCartItem(ItemInfo, 'remove');
    }

    function handleCart(e) {
        const action = e.submitter.value;
        if (action === 'add') {
            addToCart();
        } else {
            removeFromCart();
        }
    }
</script>

<form class="text-red-500 gap-4 px-4 py-2 font-bold inline-flex" on:submit|preventDefault={(e) => handleCart(e)}>
    <slot />
</form>
