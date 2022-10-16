import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // function clickHandler() {}
  const clickHanlder = () => {
    setTitle("Updated!");
    console.log(title); // 아직 바뀌기 전 값 출력
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHanlder}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;

// ex. {props.title} 같이 변화되는 상태가 아닌 것
// stateless component = presentational | dump component
// => 아무 상태를 가지지 않고, 오직 데이터 출력을 위해 존재!
// <-> stateful | smart component
