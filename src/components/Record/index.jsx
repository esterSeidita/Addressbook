import styles from "./style.module.scss";

export default function Record({data, deleteRecord}) {
  return (
    <div className={styles.Record}>
      <span onClick={()=>deleteRecord(data.name)} className={styles.Record__closeBtn}>X</span>
      <p className={styles.Record__Name}>
        {data.name} {data.surname}
      </p>
      <p>{data.number}</p>
    </div>
  );
}
