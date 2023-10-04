import { computed } from 'nanostores';
import { persistentAtom, persistentMap } from '@nanostores/persistent';

export const isCartOpen = persistentAtom<boolean>(
    'isCartOpen', // key
    false,
    {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
);



export type CartItem = {
    itemNum: number;
    id: string;
    name: string;
    imageSrc: string;
    quantity: number;
    price: number;
};

export const cartItems = persistentMap<Record<string, CartItem>>(
    'cartItems', // Key
    {}, // Initial value (an empty object in this case)
    {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
);

export let nextItemNum = persistentAtom<number>(
    'nextItemNum', // Key for localStorage
    0, // Initial value (0 in this case)
    {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
);

type ItemDisplayInfo = Pick<CartItem, 'itemNum' | 'id' | 'name' | 'imageSrc' | 'price'>;

export function manageCartItem({ itemNum, id, name, imageSrc, price }: ItemDisplayInfo, action: string) {
    const existingEntry = cartItems.get()[id];

    if (action === 'add') {
        if (existingEntry) {
            cartItems.setKey(id, {
                ...existingEntry,
                quantity: existingEntry.quantity + 1,
                price: existingEntry.price + price,
            });
        } else {
            const next = nextItemNum.set(nextItemNum.get() + 1);
            cartItems.setKey(id, {
                itemNum: next,
                id,
                name,
                imageSrc,
                quantity: 1,
                price,
            });
        }
    } else if (action === 'remove' && existingEntry && cartItems.get()[id].quantity > 0) {
        cartItems.setKey(id, {
            ...existingEntry,
            quantity: existingEntry.quantity - 1,
            price: existingEntry.price - price,
        });
    } else if (existingEntry && action === 'remove') {
        cartItems.setKey(id, {
            ...existingEntry,
            quantity: 0,
            price: 0,
        });
    }
}

export const totalItems = computed(cartItems, (items) => {
    const total = Object.values(items).reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
    return total;
});
