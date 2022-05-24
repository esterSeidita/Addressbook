import { useState } from "react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
// import state from "./../../store"

export default function Form() {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  // const localData = useSelector(state => localStorage);
  const data = useSelector((state) => state.messages);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: inputs });

    setInputs({});

    dispatch({
      type: "UPDATE_LOCALSTORAGE",
      payload: { key: "recordList", value: inputs },
    });

    const localData =
      localStorage.getItem("recordList") === null
        ? data
        : JSON.parse(localStorage.getItem("recordList"));
    localStorage.setItem("recordList", JSON.stringify(localData.concat([inputs])));
  };

  return (
    <div className={styles.Form}>
      <form onSubmit={formSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nome</label>
          <input
            required
            type="text"
            value={inputs.name || ""}
            onChange={onChange}
            id="name"
            name="name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="surname">Cognome</label>
          <input
            required
            type="text"
            value={inputs.surname || ""}
            onChange={onChange}
            id="surname"
            name="surname"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="number">Numero</label>
          <input
            className={styles.inputGroup__Number}
            required
            type="number"
            value={inputs.number || ""}
            onChange={onChange}
            id="number"
            name="number"
          />
        </div>
        <input className={styles.SumbitBtn} type="submit" value="Aggiungi" />
      </form>
    </div>
  );
}
