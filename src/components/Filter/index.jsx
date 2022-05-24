import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";

export default function Filter() {

  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filter) || "";

  const onChange = (e) => {
    const value = e.target.value;
    dispatch({type: "UPDATE_STATES", payload: {key: "filter", value: value}})
  };

  return (
    <div className={styles.Filter}>
      <input
        placeholder="Ricerca per nome e cognome"
        type="text"
        onChange={onChange}
        value={filter}
      />
    </div>
  );
}
