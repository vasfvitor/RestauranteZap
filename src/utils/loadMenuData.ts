import { Menu } from '@/utils/dados';
/*
export function getCategoriaMenu(filter: string) {
    if (Object.hasOwn(Menu, filter)) {
        const category = Menu[filter];

        return category;
    } else {
        console.log('Category not found in Menu.');
    }
}*/
export const categorias = Object.keys(Menu) as string[];

//const categories = categorias;

//export const initialCategory = categories[0];

//export type categories = (typeof categories)[number];
