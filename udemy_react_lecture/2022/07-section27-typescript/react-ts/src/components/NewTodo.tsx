import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// 함수형 타입 지정 -> ex. onAddTodo: (text: string) => void
// [함수명]: ([매개변수명]: [type]) => [반환 타입]

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // ?가 붙은 이유: ref에 아직 값이 설정되지 않았을 수도 있기 때문
    // ref 값을 가져오지 못하면 null 반환 => but, 여기에선 null이 나오지 않아!라고 100% 확신할 경우 `!`로 변경

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
