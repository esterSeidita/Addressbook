import Form from "./components/Form";
import RecordList from "./components/RecordList";
import Filter from "./components/Filter";

import { Provider } from "react-redux";
import store from "./store";

import styles from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <h1 className={styles.App__title}>AddressBook</h1>
        <main className={styles.App__mainWrapper}>
          <Form />
          <div className={styles.App__RecordsWrapper}>
            <Filter />
            <RecordList />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
