import { categorias } from '~/utils/dados';

document.addEventListener('astro:page-load', (e) => {
    console.log('astro:page-load');
    const maxItems = 6;
    const loadItems = 4;

    const filters = document.querySelectorAll('button.categorias');

    let currFilter: string = categorias[0];
    let lastFilter: string = categorias[0];
    let categoryWrapper = document.getElementById(currFilter) as HTMLDivElement;
    let items = categoryWrapper.querySelectorAll('.menu-item') as NodeListOf<HTMLDivElement>;
    let loadMore = document.getElementById('loadMore') as HTMLButtonElement;

    // Handle clicks on each button.
    filters.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            lastFilter = currFilter;
            const dataCateg = btn.getAttribute('data-categ');
            if (dataCateg !== null) {
                currFilter = dataCateg;
            } else {
                currFilter = lastFilter;
                console.log('ERROR 001 - RETRIEVING CATEGORY');
            }

            //console.log(currFilter, lastFilter);

            categoryWrapper = document.getElementById(currFilter) as HTMLDivElement;
            items = categoryWrapper.querySelectorAll('.menu-item') as NodeListOf<HTMLDivElement>;

            items.forEach(function (item, i) {
                //console.log(item.innerText, i);
                if (i < maxItems - 1) {
                    item.classList.remove('hidden');
                }
            });
            //
            if (currFilter === lastFilter) {
                return;
            }
            loadMore.style.display = 'inline-flex';
            let lastCategoryWrapper = document.getElementById(lastFilter) as HTMLElement;
            let oldItems = lastCategoryWrapper.querySelectorAll('.menu-item') as NodeListOf<HTMLElement>;

            oldItems.forEach(function (item) {
                item.classList.add('hidden');
            });
        });
    });

    items.forEach(function (item, i) {
        //console.log(item.innerText, i);
        if (i < maxItems - 1) {
            item.classList.remove('hidden');
        }
    });

    // Function to reveal a specified number of hidden items
    function revealItems(item: number) {
        const hiddenItems = categoryWrapper.querySelectorAll('.hidden');
        for (let i = 0; i < item && i < hiddenItems.length; i++) {
            hiddenItems[i].classList.remove('hidden');
        }
        if (categoryWrapper.querySelectorAll('.hidden').length === 0) {
            loadMore.style.display = 'none';
        }
    }

    loadMore.addEventListener('click', function () {
        revealItems(loadItems);
    });
});
