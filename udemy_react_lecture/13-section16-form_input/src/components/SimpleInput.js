import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // 입력값이 건드려진 뒤면서 값이 유효하지 않은 경우 => true (error message 표시해주기)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true); // input focus를 잃었다는건 그 전에 사용자가 input을 건드렸다는 의미이기 때문!
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // 기본 동작인 http 요청 막기 -> 새로고침 방지

    setEnteredNameTouched(true);

    // trim()으로 값 사이에 있는 공백들 모두 제거
    if (!enteredNameIsValid) return; // 함수 뒷부분 실행되지 않도록 처리

    console.log(enteredName);

    setEnteredName(""); // 입력된 값 초기화 -> invalid 상태가 되어버리므로 아래처럼 touched도 false로 변경해주어야 함
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
