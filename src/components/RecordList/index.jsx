import { useEffect, useState } from "react";
import Record from "../Record";
import styles from "./style.module.scss";

export default function RecordList({ deleteRecord, filter, data }) {
  const [dataFiltered, setDataFiltered] = useState([]);
  const localData = JSON.parse(localStorage.getItem("records"));

  useEffect(()=>{
    setDataFiltered(data);
  }, [data])

  useEffect(() => {
    const filtered = data.filter(
      (record) =>
        record.name.toLowerCase().includes(filter.toLowerCase()) ||
        record.surname.toLowerCase().includes(filter.toLowerCase())
    );
    setDataFiltered(filtered);
    localStorage.setItem("records", JSON.stringify(filtered));
  }, [filter]);

  return (
    <div className={styles.RecordList}>
      {/* {dataFiltered.map((obj, i) => (
        <Record deleteRecord={deleteRecord} key={i} data={obj} />
      ))} */}
      {localData.length>0?localData.map((obj, i) => (
        <Record deleteRecord={deleteRecord} key={i} data={obj} />
      )):null}
    </div>
  );
}
