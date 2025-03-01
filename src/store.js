/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.codeCount = 8;
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      // увеличиваем состаяние счётчика стора на еденицу
      list: [...this.state.list, { code: this.codeCount++, title: "Новая запись", focus: 0 }],
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map((item) => {
        if (item.code === code) {
          // выделяю или убираю выделение элемента по его коду
          item.selected = !item.selected;
          // Добавляю счётчик выделений
          if (item.selected){
            item.focus += 1;
          }
        }
        if (item.code !== code) item.selected = false; // Убираю выделения у всех элементов, кроме выбранного
        return item;
      }),
    });
  }
}

export default Store;
