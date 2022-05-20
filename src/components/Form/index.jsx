import { useState } from "react";
import styles from "./style.module.scss";

export default function Form({ sendInputs }) {
  const [inputs, setInputs] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    sendInputs(inputs);
    setInputs({});
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
        {/* <div className={styles.Form__inputGroup}> */}
        <input className={styles.SumbitBtn} type="submit" value="Aggiungi" />
        {/* </div> */}
      </form>
    </div>
  );
}
