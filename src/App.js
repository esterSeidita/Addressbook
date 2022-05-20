import logo from "./logo.svg";
import styles from "./App.module.scss";
import Form from "./components/Form";
import { useState } from "react";
import RecordList from "./components/RecordList";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const deleteRecord = (name) =>{
    const newRecords = data.filter((obj)=>obj.name !== name);
    setData(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));
  }

  const getData = (data) => {
    setData((prev) => prev.concat([data]));
    const localData = JSON.parse(localStorage.getItem("records"));
    const newData = localData.concat([data]);
    localStorage.setItem("records", JSON.stringify(newData));
  };

  const getFilterValue = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={styles.App}>
      <Form sendInputs={getData} />
      <div className={styles.App__RecordsWrapper}>
        <Filter sendFilterValue={getFilterValue} />
        <RecordList deleteRecord={deleteRecord} filter={filter} data={data} />
      </div>
    </div>
  );
}

export default App;
