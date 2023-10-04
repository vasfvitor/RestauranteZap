import { atom, map } from 'nanostores';
import { persistentAtom, persistentMap } from '@nanostores/persistent';

//import { setPersistentEngine } from '@nanostores/persistent';

export const isCartOpen = persistentAtom<boolean>(
    'isCartOpen', // key
    false,
    {
        encode: JSON.stringify, 
        decode: JSON.parse, 
    }
);

export const totalPrice = persistentAtom<number>(
    'totalPrice', // Key for localStorage
    0, // Initial value (0 in this case)
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

//export const cartItems = map<Record<string, CartItem>>({});

let nextItemNum = 0;

type ItemDisplayInfo = Pick<CartItem, 'itemNum' | 'id' | 'name' | 'imageSrc' | 'price'>;

export function manageCartItem({ itemNum, id, name, imageSrc, price }: ItemDisplayInfo, action: string) {
    //console.log(typeof cartItems)

    const existingEntry = cartItems.get()[id];

    if (action === 'add') {
        if (existingEntry) {
            cartItems.setKey(id, {
                ...existingEntry,
                quantity: existingEntry.quantity + 1,
                price: existingEntry.price + price,
            });
        } else {
            cartItems.setKey(id, { itemNum: nextItemNum++, id, name, imageSrc, quantity: 1, price });
        }
    } else if (action === 'remove' && existingEntry && cartItems.get()[id].quantity > 0) {
        cartItems.setKey(id, {
            ...existingEntry,
            quantity: existingEntry.quantity - 1,
            price: existingEntry.price - price,
        });
    } else {
    }
    calculateTotalPrice();
}

export function calculateTotalPrice() {
    const items = cartItems.get();
    const total = Object.values(items).reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
    totalPrice.set(total);
}
