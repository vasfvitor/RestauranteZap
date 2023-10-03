<script>
  import { isCartOpen, cartItems } from '~/components/Svelte/cartStore';
</script>

{#if $isCartOpen}
  {#if Object.values($cartItems).length}
    <aside>
      {#each Object.values($cartItems) as cartItem}
      <li>
        <img src={cartItem.imageSrc} alt={cartItem.name} />
        <h3>{cartItem.name}</h3>
        <p>Quantity: {cartItem.quantity}</p>
      </li>
      {/each}
    </aside>
  {:else}
<p>Your cart is empty!</p>
  {/if}
{/if}