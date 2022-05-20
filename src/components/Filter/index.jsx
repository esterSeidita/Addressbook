import {useState} from "react";
import styles from "./style.module.scss";

export default function Filter({sendFilterValue}) {
  const [filterValue, setFilterValue] = useState("");
  const onChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    sendFilterValue(value);
  }
  return <div className={styles.Filter}>
    <input placeholder="Ricerca per nome e cognome" type="text" onChange={onChange} value={filterValue} />
  </div>;
}
