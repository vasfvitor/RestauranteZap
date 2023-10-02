import { Menu } from './dados';

export function getCategoriaMenu(filter: string) {
    if (Object.hasOwn(Menu, filter)) {
        const category = Menu[filter];

        return category;
    } else {
        console.log('Category not found in Menu.');
    }
}

export const categorias = Object.keys(Menu);

/*
window.onload = (e) => {
    const maxItems = 6;
    const loadItems = 4;

    const buttons = document.querySelectorAll('button.categorias');

    let currFilter: string = 'churrasco';
    let categoryWrapper = document.getElementById(currFilter);
    let items = categoryWrapper?.querySelectorAll('.menu-item');
    let loadMore = document.getElementById('loadMore');
    let lastFilter: string = 'churrasco';

    // Handle clicks on each button.
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            lastFilter = currFilter;
            currFilter = btn.textContent || '';

            console.log(currFilter, lastFilter);

            //let wrapper = document.querySelector('.menu-item-wrapper');

            categoryWrapper = document.getElementById(currFilter);
            items = categoryWrapper?.querySelectorAll('.menu-item');

            items?.forEach(function (item, i) {
                //console.log(item.innerText, i);
                if (i < maxItems - 1) {
                    item.classList.remove('hidden');
                }
            });
            //
            if (currFilter === lastFilter) {
                return;
            }
            let lastCategoryWrapper = document.getElementById(lastFilter);
            let oldItems = lastCategoryWrapper?.querySelectorAll('.menu-item');

            oldItems?.forEach(function (item) {
                item.classList.add('hidden');
            });
        });
    });

    items?.forEach(function (item, i) {
        //console.log(item.innerText, i);
        if (i < maxItems - 1) {
            item.classList.remove('hidden');
        }
    });

    loadMore?.addEventListener('click', function () {
        [].forEach.call(categoryWrapper?.querySelectorAll('.hidden'), function (item, i) {
            console.log(currFilter);

            if (i < loadItems) {
                console.log('EE');
                item.classList.remove('hidden');
            }
            if (categoryWrapper?.querySelectorAll('.hidden').length === 0) {
                loadMore.style.display = 'none';
            }
        });
    });
};
*/