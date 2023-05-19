import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const {list, cart} = store.getState();

  const callbacks = {
    deleteItemToCart: useCallback((code) => {
      store.deleteItemToCart(code);
    }, [store]),

    addItemToCart: useCallback((code) => {
      store.addItemToCart(code);
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Приложение на чистом JS'/>
      <Controls onDeleteItem={callbacks.deleteItemToCart} list={cart}/>
      <List list={list}
            listFunction={callbacks.addItemToCart} listTitle={'Добавить'}/>
    </PageLayout>
  );
}

export default App;
