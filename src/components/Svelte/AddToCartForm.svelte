<form on:submit|preventDefault={addToCart}>
  <slot></slot>
</form>

<script>
  import { addCartItem, isCartOpen } from '~/components/Svelte/cartStore';
  export let itemId;
  export let itemName; 

  // we'll hardcode the item info for simplicity!
  let ItemInfo = {
    id: itemId,
    name: itemName,
    imageSrc: '/images/astronaut-figurine.png',
  }

  function addToCart() {
    isCartOpen.set(true);
    addCartItem(ItemInfo);
  }
</script>