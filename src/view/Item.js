import {useParams} from "react-router-dom";
import invoices from "../data/data";

function getItemInfo(number) {
  const item = invoices.find(e => `${e.number}` === number);

  return item === undefined ? {
    name: "unknown name",
    number: number,
    amount: "unknown name",
    due: "unknown date"
  } : item;
}

function Item() {
  const {itemId} = useParams();

  const info = getItemInfo(itemId);

  console.log(info)

  return (
    <div>
      <div>name: {info.name}</div>
      <div>amount: {info.amount}</div>
      <div>number: {info.number}</div>
      <div>due: {info.due}</div>
    </div>
  )
}

export default Item