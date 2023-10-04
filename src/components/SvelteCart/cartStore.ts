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

export const currStep = persistentAtom<number>(
    'currStep', // key
    0,
    {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
);

export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageSrc: string;
    quantity: number;
    itemNum: number;
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

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'price' | 'imageSrc' | 'itemNum'>;

export function manageCartItem({ id, name, imageSrc, itemNum, price }: ItemDisplayInfo, action: string) {
    const currItem = cartItems.get()[id];

    if (action === 'add') {
        if (currItem) {
            cartItems.setKey(id, {
                ...currItem,
                price: currItem.price + price,
                quantity: currItem.quantity + 1,
            });
        } else {
            const next = nextItemNum.set(nextItemNum.get() + 1);
            cartItems.setKey(id, {
                id,
                name,
                price,
                imageSrc,
                quantity: 1,
                itemNum: next,
            });
        }
    } else if (action === 'remove' && currItem && cartItems.get()[id].quantity > 0) {
        cartItems.setKey(id, {
            ...currItem,
            quantity: currItem.quantity - 1,
            price: currItem.price - price,
        });
    } else if (currItem) {
        cartItems.setKey(id, {
            ...currItem,
            price: 0,
            quantity: 0,
        });
    }
}

export const totalItems = computed(cartItems, (items) => {
    const total = Object.values(items).reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
    return total;
});
