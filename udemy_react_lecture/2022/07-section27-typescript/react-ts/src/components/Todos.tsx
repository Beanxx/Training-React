import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// FC: FunctionComponent <= 제네릭 타입
// 이 안에 넣을 값은 자신이 지정한 props 객체!
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

// children 프로퍼티는 기본 프로퍼티

// .bind(): 실행할 함수를 미리 설정 가능
// 먼저, 이 키워드가 무엇을 가리키는지 지정
