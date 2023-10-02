<form on:submit|preventDefault={addToCart}>
  <slot></slot>
</form>

<script>
  import { addCartItem, isCartOpen } from '@/utils/cartStore';

  // we'll hardcode the item info for simplicity!
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '/images/astronaut-figurine.png',
  }

  function addToCart() {
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }
</script>