const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterInputs: document.getElementsByClassName('range__input'),
    filterShow: document.getElementsByClassName('filter__show'),
}


export async function render(params) {
    let complexNamesBlock = '';
    let roomsInputs = '';

    params.complexNames.forEach(name => {
        complexNamesBlock += `<option value="${name}">ЖК ${name}</option>`
    });

    params.roomValues.forEach(value => {
        roomsInputs += `<input
        name="rooms"
        type="checkbox"
        id="rooms_${value}"
        class="rooms__checkbox"
        value="${value}"
    /><label for="rooms_${value}" class="rooms__btn">${value}</label>`
    });

    const markup = `<!-- Filter -->
    <form class="container p-0" id="filterForm">
        <div class="heading-1">Выбор квартир:</div>
        <div class="filter">
            <div class="filter__col">
                <div class="filter__label">Выбор проекта:</div>
                <select name="complex" id="" class="filter__dropdown">
                    <option value="all">Все проекты</option>
                    ${complexNamesBlock}
                </select>
            </div>
            <div class="filter__col rooms">
                <div class="filter__label">Комнат:</div>
                <div class="rooms__wrapper">
                    ${roomsInputs}
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Площадь:</div>
                <div class="range__wrapper">
                    <label class="range">
                        <div for="" class="range__label">от</div>
                        <input
                            name="sqmin"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMin}"
                            value="${params.squareMin}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                    <label class="range">
                        <div for="" class="range__label">до</div>
                        <input
                            name="sqmax"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMax}"
                            value="${params.squareMax}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Стоимость:</div>
                <div class="range__wrapper">
                    <div class="range">
                        <label for="" class="range__label">от</label>
                        <input
                            type="number"
                            name="pricemin"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMin}"
                            value="${params.priceMin}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                    <div class="range">
                        <label for="" class="range__label">до</label>
                        <input
                            type="number"
                            name="pricemax"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMax}"
                            value="${params.priceMax}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter__buttons">
            <button class="filter__show">Показать объекты</button>
            <button class="filter__reset" type="reset">Сбросить фильтр</button>
        </div>
    </form>
    <!-- // Filter -->`;
    await document.getElementById('app').insertAdjacentHTML('afterbegin', markup)
}

export function changeButtonText(num) {
    const btn = elements.filterShow[0];

    let resultString = num > 0 ? `Показать ${num} объектов` : 'Результатов нет'

    const filterShowBtn = document.querySelector('.filter__show');
    filterShowBtn.innerText = resultString;
    btn.disabled = num > 0 ? false : true;
}

export function getInput() {
    const searchParams = new URLSearchParams();
    const iterator = searchParams.entries()

    if (elements.filterSelect[0].value !== 'all') {
        searchParams.append(elements.filterSelect[0].name, elements.filterSelect[0].value)
    }

    const activeRooms = [];
    Array.prototype.forEach.call(elements.filterRooms, room => {
        if (room.checked && room.value !== '') {
            activeRooms.push(room.value);
        }
    })
    const activeRoomsString = activeRooms.join(',');
    if (activeRoomsString !== '') {
        searchParams.append('rooms', activeRoomsString)
    }


    Array.prototype.forEach.call(elements.filterInputs, input => {
        if (input.value !== '') {
            searchParams.append(input.name, input.value)
        }
    });

    const queryString = searchParams.toString();
    if (queryString) {
        console.log('Object.fromEntries', Object.fromEntries(iterator))
        return '?' + queryString;
    } else return '';


    console.log('searchParams', searchParams.toString())
    console.log('Object.fromEntries', Object.fromEntries(iterator))
    console.log("iterator", iterator.next())
    console.log("iterator", iterator.next())

}