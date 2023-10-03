document.addEventListener('DOMContentLoaded', (e) => {
    console.log('RUN');
    const maxItems = 6;
    const loadItems = 4;

    const filters = document.querySelectorAll('button.categorias');

    let currFilter: string = 'churrasco';
    let categoryWrapper = document.getElementById(currFilter);
    let items = categoryWrapper?.querySelectorAll('.menu-item');
    let loadMore = document.getElementById('loadMore') as HTMLButtonElement;
    let lastFilter = '';

    // Handle clicks on each button.
    filters.forEach((btn) => {
        btn.addEventListener('click', () => {
            lastFilter = currFilter;
            currFilter = btn.textContent?.toLowerCase() || '';

            //console.log(currFilter, lastFilter);

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
            loadMore.style.display = 'inline-flex';
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
            // console.log(currFilter);

            if (i < loadItems) {
                item.classList.remove('hidden');
            }
            if (categoryWrapper?.querySelectorAll('.hidden').length === 0) {
                loadMore.style.display = 'none';
            }
        });
    });
});
