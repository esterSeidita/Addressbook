import { useDispatch } from "react-redux";

import styles from "./style.module.scss";

export default function Record({ data }) {
  const dispatch = useDispatch();

  const removeRecord = () => {
    dispatch({ type: "REMOVE", payload: data.name });
    const localData = JSON.parse(localStorage.getItem("recordList"));
    const newData = localData.filter((obj) => obj.name !== data.name);
    localStorage.setItem("recordList", JSON.stringify(newData));
  };

  return (
    <div className={styles.Record} onClick={() => removeRecord()}>
      <p className={styles.Record__Name}>
        {data.name} {data.surname}
      </p>
      <p>{data.number}</p>
    </div>
  );
}
