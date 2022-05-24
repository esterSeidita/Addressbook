import Record from "../Record";
import { useSelector } from "react-redux";

export default function RecordList() {
  const store = useSelector((store) => store.messages);
  const filter = useSelector((store) => store.filter) || "";
  const localData =
    localStorage.getItem("recordList") !== null
      ? JSON.parse(localStorage.getItem("recordList"))
      : store;

  return (
    <div>
      {localData &&
        localData
          .filter(
            (obj) =>
              obj.name.toLowerCase().includes(filter.toLowerCase()) ||
              obj.surname.toLowerCase().includes(filter.toLowerCase())
          )
          .splice(0)
          .reverse()
          .map((obj, i) => <Record key={i} data={obj} />)}
    </div>
  );
}
