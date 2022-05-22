import { useEffect, useState } from "react";
import Record from "../Record";

export default function RecordList({ deleteRecord, filter, data }) {
  const [dataFiltered, setDataFiltered] = useState([]);
  const localData = JSON.parse(localStorage.getItem("records"));
  const localDataFiltered = JSON.parse(localStorage.getItem("recordsFiltered"));

  useEffect(()=>{
    setDataFiltered(data);
    localStorage.setItem("recordsFiltered", JSON.stringify(localData));
  }, [data])  
  

  useEffect(() => {
    const filtered = localData.filter(
      (record) =>
        record.name.toLowerCase().includes(filter.toLowerCase()) ||
        record.surname.toLowerCase().includes(filter.toLowerCase())
    );
    setDataFiltered(filtered);
    localStorage.setItem("recordsFiltered", JSON.stringify(filtered));
  }, [filter]);

  return (
    <div>
      {localDataFiltered !== null && localDataFiltered.map((obj, i) => (
        <Record deleteRecord={deleteRecord} key={i} data={obj} />
      ))}
    </div>
  );
}
