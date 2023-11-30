import React, { useCallback, useState } from "react";

import PageLayout from "./components/page-layout";
import Head from "./components/head";
import ActionBar from "./components/action-bar";
import List from "./components/list";
import Basket from "./components/basket";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [modalActive, setModalActive] = useState(false);

  const list = store.getState().list;
  const basket = store.getState().basket;

  const callbacks = {
    onAdd: useCallback(
      (code) => {
        store.addItem(code);
      },
      [store]
    ),

    onDelete: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),
  };

  return (
      <PageLayout>
        <Head title="Магазин" />
        <ActionBar
          title="В корзине:"
          basket={basket}
          setModalActive={setModalActive}
        />
        <List list={list} currentFunc={callbacks.onAdd} />
        {modalActive && (
          <Basket
            items={basket}
            modalActive = {modalActive}
            setModalActive={setModalActive}
            deleteItem={callbacks.onDelete}
          />
        )}
      </PageLayout>
  );
}

export default App;
