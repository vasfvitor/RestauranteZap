import { atom, map } from 'nanostores';
//import { persistentAtom } from '@nanostores/persistent'

export const isCartOpen = atom(false);
export const totalPrice = atom(0);

export type CartItem = {
    id: string;
    name: string;
    imageSrc: string;
    quantity: number;
    price: number;
};

export const cartItems = map<Record<string, CartItem>>({});

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc' | 'price'>;
export function addCartItem({ id, name, imageSrc, price }: ItemDisplayInfo) {
    const existingEntry = cartItems.get()[id];
    if (existingEntry) {
        cartItems.setKey(id, {
            ...existingEntry,
            quantity: existingEntry.quantity + 1,
            price: existingEntry.price + price,
        });
    } else {
        cartItems.setKey(id, { id, name, imageSrc, quantity: 1, price });
    }
}

export function calculateTotalPrice() {
    const items = cartItems.get();
    const total = Object.values(items).reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
    totalPrice.set(total);
}
