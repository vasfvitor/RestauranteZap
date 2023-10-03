<script>
    import { addCartItem, isCartOpen, calculateTotalPrice } from '~/components/Svelte/cartStore';
    export let itemId;
    export let itemName;
    export let itemPrice;

    let ItemInfo = {
        id: itemId,
        name: itemName,
        imageSrc: '/images/astronaut-figurine.png',
        price: itemPrice,
        // make icons for each category and maybe custom icons
    };

    function addToCart() {
        isCartOpen.set(true);
        addCartItem(ItemInfo);
        calculateTotalPrice();
    }
</script>

<form on:submit|preventDefault={addToCart}>
    <slot />
</form>
