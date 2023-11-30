/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
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

  // Добавление элемента в корзину
  addItem(code) {
    const key = code.toString();
    const isKey = key in this.state.basket;

    this.setState({
      ...this.state,
      basket: {
        ...this.state.basket,
        [key]: isKey
          ? [
              ...this.state.basket[key],
              ...this.state.list.filter((el) => el.code === code),
            ]
          : [...this.state.list.filter((el) => el.code === code)],
      },
    });
  }

  /**
   * Удалени товара по коду
   * @param code
   */
  deleteItem(code) {
    delete this.state.basket[code.toString()];

    this.setState({
      ...this.state,
    });
  }
}

export default Store;
