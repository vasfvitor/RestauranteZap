import { computed } from 'nanostores';
import { persistentAtom, persistentMap } from '@nanostores/persistent';

export const isCartOpen = persistentAtom<boolean>('isCartOpen', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export const currStep = persistentAtom<number>('currStep', 0, {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export type CartItem = {
    id: string;
    name: string;
    price: number;
    totalPrice: number;
    imageSrc: string;
    quantity: number;
    itemNum: number;
};

export const cartItems = persistentMap<Record<string, CartItem>>(
    'cartItems', // Key for localStorage
    {}, // Initial value (an empty object in this case)
    {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
);

export let nextItemNum = persistentAtom<number>('nextItemNum', 0, {
    encode: JSON.stringify,
    decode: JSON.parse,
});

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'price' | 'totalPrice' | 'imageSrc' | 'itemNum'>;

export function manageCartItem({ id, name, imageSrc, price }: ItemDisplayInfo, action: string) {
    const currItem = cartItems.get()[id];

    if (action === 'add') {
        if (currItem) {
            cartItems.setKey(id, {
                ...currItem,
                totalPrice: currItem.totalPrice + price,
                quantity: currItem.quantity + 1,
            });
        } else {
            cartItems.setKey(id, {
                id,
                name,
                price,
                totalPrice: price,
                imageSrc,
                quantity: 1,
                itemNum: nextItemNum.get() + 1,
            });
            nextItemNum.set(nextItemNum.get() + 1);
            console.log(nextItemNum.get());
        }
    } else if (action === 'remove' && currItem && cartItems.get()[id].quantity > 0) {
        cartItems.setKey(id, {
            ...currItem,
            quantity: currItem.quantity - 1,
            totalPrice: currItem.totalPrice - price,
        });
    } else if (action === 'clear' && currItem && cartItems.get()[id].quantity > 0) {
        cartItems.setKey(id, {
            ...currItem,
            quantity: 0,
            totalPrice: 0,
        });
    } else if (currItem) {
        cartItems.setKey(id, {
            ...currItem,
            totalPrice: 0,
            quantity: 0,
        });
    }
}

export const totalItems = computed(cartItems, (items) => {
    const total = Object.values(items).reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
    //return Number(total.toFixed(2));
    return total
});
