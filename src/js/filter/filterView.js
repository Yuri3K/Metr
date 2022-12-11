import 'url-search-params-polyfill';

const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterFields: document.getElementsByClassName('range__input'),
    // filterSelect: document.querySelector('.filter__dropdown'),
}

export function render(params) {
    console.log(params)
    let names = '';
    params.complexNames.forEach(item => names += `<option value="${item}">ЖК ${item}</option>`);

    let rooms = '';
    params.roomValues.forEach(item => rooms += `<input
                                                name="rooms"
                                                type="checkbox"
                                                id="rooms_${item}"
                                                class="rooms__checkbox"
                                                value="${item}"
                                              /><label for="rooms_${item}" class="rooms__btn">${item}</label>`)

    const markup = `<!-- Filter -->
  <form method="GET" class="container p-0" id="filter-form">
      <div class="heading-1">Выбор квартир:</div>
      <div class="filter">
          <div class="filter__col">
              <div class="filter__label">Выбор проекта:</div>
              <select name="complex" id="" class="filter__dropdown">
                  <option value="all">Все проекты</option>
                  ${names}
              </select>
          </div>
          <div class="filter__col rooms">
              <div class="filter__label">Комнат:</div>
              <div class="rooms__wrapper">
                  ${rooms}
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
          <button class="filter__show">Показать 119 объектов</button>
          <button class="filter__reset">Сбросить фильтр</button>
      </div>
  </form>
  <!-- // Filter -->`;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}

export function changeButtonText(number) {
    const btn = document.querySelector('.filter__show');
    btn.innerText = `Показать ${number} объектов`
}


//РАБОЧИЙ КОД. ДОЖИДАЕМСЯ КОГДА ПОЯВИТСЯ ЭЛЕМЕНТ НА СТРАНИЦЕ И ПРОДОЛЖАЕМ ВЫПОЛНЕНИЕ КОДА
// export function getInput() {
//     return new Promise(resolve => {
//         const filterSelect = document.querySelector('.filter__dropdown')
//         resolve(filterSelect)
//     }).then((filterSelect) => {
//         const searchParams = new URLSearchParams();
//         console.log("filterSelect", filterSelect.value)
//         if (filterSelect.value !== 'all') {
//             searchParams.append(filterSelect.name, filterSelect.value)
//         }
//         console.log("searchParams", searchParams)
//     })
// }

export function getInput() {
    const searchParams = new URLSearchParams();

    if (elements.filterSelect[0].value !== 'all') {
        searchParams.append(elements.filterSelect[0].name, elements.filterSelect[0].value);
    }

    const roomsValues = [];
    Array.from(elements.filterRooms).forEach(item => {
        if (item.value !== '' && item.checked) {
            roomsValues.push(item.value);
        }
    })
    const roomsValuesString = roomsValues.join(',');
    if (roomsValuesString !== '') {
        searchParams.append('rooms', roomsValuesString)
    }
    console.log("roomsValuesString", roomsValuesString);

    Array.from(elements.filterFields).forEach(item => {
        if (item.value !== '') {
            searchParams.append(item.name, item.value)
        }
    })

    const queryString = searchParams.toString();
    if (queryString) {
        return '?' + queryString
    } else return ''


}
