import styles from "./App.module.scss";
import Form from "./components/Form";
import { useState } from "react";
import RecordList from "./components/RecordList";
import Filter from "./components/Filter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const deleteRecord = (name) => {
    const newRecords = data.filter((obj) => obj.name !== name);
    setData(newRecords);
    const localData = JSON.parse(localStorage.getItem("records"));
    const newLocalRecords = localData.filter((obj) => obj.name !== name);
    localStorage.setItem("records", JSON.stringify(newLocalRecords));
  };

  const getData = (data) => {
    setData((prev) => prev.concat([data]));
  };

  const getFilterValue = (filter) => {
    setFilter(filter);
  };

  return (
    <Provider store={store}>
      <div className={styles.App}>
        <h1 className={styles.App__title}>AddressBook</h1>
        <main className={styles.App__mainWrapper}>
          <Form sendInputs={getData} />
          <div className={styles.App__RecordsWrapper}>
            <Filter sendFilterValue={getFilterValue} />
            <RecordList
              deleteRecord={deleteRecord}
              filter={filter}
              data={data}
            />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
